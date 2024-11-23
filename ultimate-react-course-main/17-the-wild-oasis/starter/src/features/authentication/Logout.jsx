import { HiArrowRightOnRectangle } from "react-icons/hi2"
import ButtonIcon from "../../ui/ButtonIcon"
import { useLogOut } from "./useLogout"
import Spinner from "../../ui/Spinner";

function Logout() {
    const {logout, isLoading}=useLogOut();

    return (
        <ButtonIcon disabled={isLoading} onClick={logout} >
            {isLoading?<Spinner/>:<HiArrowRightOnRectangle/>}
        </ButtonIcon>
    )
}

export default Logout
