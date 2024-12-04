import { FC } from 'react';
import { useQuery } from "react-query";
import { getUsers } from "../../api/requests/users";
import User from "../user/User";
import style from "../users/Users.module.css";

const Users: FC = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers().then((responce) => responce.data)
    });

    if (isLoading) {
        return <div className={style.loading}>Loading...</div>;
    }

    if (isError) {
        return <div className={style.error}>Error loading users.</div>;
    }

    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Users</h2>
            <div className={style.users}>
                {data && data.map((user:UserData) => (
                    <User
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        address={user.address}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
