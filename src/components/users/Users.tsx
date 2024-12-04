import {FC, useState} from 'react';
import {useQuery} from "react-query";
import {getUsers} from "../../api/requests/users";
import User from "../user/User";
import style from "../users/Users.module.css";
import Search from "../search/Search.tsx";

const Users: FC = () => {
    const [sorted, setSorted] = useState(false);
    const {data, isLoading, isError} = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers().then((responce) => responce.data)
    });

    if (isLoading) {
        return <div className={style.loading}>Loading...</div>;
    }

    if (isError) {
        return <div className={style.error}>Error loading users.</div>;
    }
    const sortedDate = data?.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className={style.wrapper}>
            <Search/>
            <h2 className={style.title}>Users</h2>
            <button
                className={style.btn}
                onClick={() => setSorted(!sorted)}
            >
                Sorting
            </button>
            <div className={style.users}>
                {
                    sorted
                        ? data && data.map((user: UserData) => (
                        <User
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                        />
                    ))
                        : data && sortedDate.map((user: UserData) => (
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
