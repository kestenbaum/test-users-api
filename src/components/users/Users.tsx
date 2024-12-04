import { FC, useState } from 'react';
import { useQuery } from "react-query";
import { getUsers } from "../../api/requests/users";
import User from "../user/User";
import style from "../users/Users.module.css";


const Users: FC = () => {
    const [sorted, setSorted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');  // Состояние для хранения текста поиска

    const { data, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers().then((response) => response.data)
    });

    if (isLoading) {
        return <div className={style.loading}>Loading...</div>;
    }

    if (isError) {
        return <div className={style.error}>Error loading users.</div>;
    }


    const filteredUsers = data?.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedData = filteredUsers?.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Users</h2>
            <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние при изменении текста
                className={style.search}
            />

            {/* Кнопка сортировки */}
            <button
                className={style.btn}
                onClick={() => setSorted(!sorted)}
            >
                Sorting
            </button>

            <div className={style.users}>
                {sorted
                    ? sortedData?.map((user: UserData) => (
                        <User
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address.city}
                        />
                    ))
                    : filteredUsers?.map((user: UserData) => (
                        <User
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address.city}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Users;
