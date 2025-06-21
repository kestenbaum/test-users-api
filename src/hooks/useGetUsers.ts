import {useQuery} from "react-query";

import { getUsers } from "../api/requests/users";

export const useGetUsers = () => {
    const { data, isLoading, error } = useQuery<UserData, Error>(
        ["users"],
        ():Promise<UserData> => getUsers().then(response => response.data),
    );


    return {
        isLoading,
        error,
        data
    }
}

