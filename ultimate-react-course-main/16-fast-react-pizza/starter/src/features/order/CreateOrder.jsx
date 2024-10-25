import { useState } from "react";
import { Form, Navigate, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from '../../store';
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation=useNavigation();
  const isSubmitting=navigation.state==="submitting";
  const {username, 
    status:addressStatus, 
    position, 
    address,
    error:errorAddress,
  }=useSelector(state=>state.user);
  const isLoadingAddress=addressStatus==='loading';
  console.log(position);

  const formErrors=useActionData();
  const dispatch=useDispatch();
  const cart = useSelector(getCart);
  const totalCartPrice=useSelector(getTotalCartPrice);
  const priorityPrice=withPriority?totalCartPrice*0.2:0;
  const totalPrice=totalCartPrice+priorityPrice;

  if(!cart.length) return <EmptyCart/>

  return (
    <div  className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold" >Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new" >
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center" >
          <label className="sm:basis-40" >First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center" >
          <label className="sm:basis-40" >Phone number</label>
          <div className="grow" >
            <input className="input w-full" type="tel" name="phone" required />
          {formErrors?.phone && <p className="mt-2 text-xs text-red-700 p-2 rounded-md bg-red-100" >{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col relative sm:flex-row sm:items-center" >
          <label className="sm:basis-40" >Address</label>
          <div className="grow">
            <input type="text"
            name="address" 
            required 
            className="input  w-full" 
            disabled={isLoadingAddress}
            defaultValue={address}
            />
            {addressStatus==='error' && <p className="mt-2 text-xs 
            text-red-700 p-2 rounded-md bg-red-100" 
            >{errorAddress} 
            </p>}
          </div>
          {!position.latitude && !position.longitude &&
            <span className="absolute right-[3px] z-50 top-[3px] 
            md:right-[5px] md:top-[5px]" >
          <Button type='small' disabled={isLoadingAddress} onClick={(e)=>{
            e.preventDefault();
            dispatch(fetchAddress())
            }} >Get Position</Button>
          </span>}
        </div>

        <div className="mb-12 flex items-center gap-5" >
          <input
          className="h-6 w-6 accent-yellow-400
          focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <input type='hidden' name='position' 
          value={position.longitude && position.latitude?
          `${position.latitude}, ${position.longitude}`:''} ></input>
          <Button disabled={isSubmitting || isLoadingAddress} type="primary" >
            {isSubmitting?"Placing order...":`Order now from ${formatCurrency(totalPrice)}`}
            </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
  const formData=await request.formData();
  const data=Object.fromEntries(formData);
  const order={
    ...data,
    cart:JSON.parse(data.cart),
    priority:data.priority==="true",
  };

  const errors={}
  if(!isValidPhone(order.phone)){
    errors.phone="Please give us your valid phone number. We might need it to contact you";
  }
  if(Object.keys(errors).length>0) return errors;

  const newOrder=await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
