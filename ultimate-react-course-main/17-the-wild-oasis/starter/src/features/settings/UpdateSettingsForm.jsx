import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { isLoading, settings={} } = useSettings();
  const {
    minBookingLength,
    maxBookingLength,
    breakfastPrice,
    maxGuestsPerBooking,
  } = settings;

  const {isUpdating, updateSetting}=useUpdateSetting();

  if(isLoading) return <Spinner/>;

  function handleUpdate(e, field){
    const {value}=e.target;
    console.log(value);
    if(!value) return;
    updateSetting({[field]:value})
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input defaultValue={minBookingLength} type="number" id="min-nights" 
        onBlur={e=>handleUpdate(e, 'minBookingLength')} disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input defaultValue={maxBookingLength} type="number" id="max-nights"
        onBlur={e=>handleUpdate(e, 'maxBookingLength')} disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input defaultValue={maxGuestsPerBooking} type="number" id="max-guests" 
        onBlur={e=>handleUpdate(e, 'maxGuestsPerBooking')} disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input defaultValue={breakfastPrice} type="number" id="breakfast-price" 
        onBlur={e=>handleUpdate(e, 'breakfastPrice')} disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
