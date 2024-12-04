import { useQuery } from "react-query";
import { getUsers } from "../api/requests/users";

const useUsers = () => {
    const { data, isLoading, isError, error } = useQuery(
        'users',
        () => getUsers().then((response) => response.data))

    return { data, isLoading, isError, error };
}

export default useUsers;