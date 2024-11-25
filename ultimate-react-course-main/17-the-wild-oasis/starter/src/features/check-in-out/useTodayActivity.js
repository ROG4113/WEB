import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity(){
    const {isLoding, data:activities}=useQuery({
        queryFn:getStaysTodayActivity,
        queryKey:["today-activity"],
    });

    return {activities, isLoding}
}