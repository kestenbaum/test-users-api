import React, { useMemo } from 'react';

import {
    useDebounce,
    useGetUsers,
    useUserFilter,
    useUserSort
} from "../../hooks";

import User from "../user/User.tsx";
import style from "./Users.module.css";

const UserList = () => {
    const { data: users = [], isLoading } = useGetUsers();
    const { filter, handleFilterChange } = useUserFilter();
    const { sortOrder, toggleSortOrder } = useUserSort();
    const debouncedFilter = useDebounce(filter, 500);

    const filteredUsers = useMemo(() =>
            users.filter((user: UserData ) => user.name.toLowerCase().includes(debouncedFilter.toLowerCase())),
        [users, debouncedFilter]);

    const sortedUsers = useMemo(
        () =>
            filteredUsers.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            }),
        [filteredUsers, sortOrder]
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                className={style.search}
                placeholder="Filter by name"
            />
            <button
                onClick={toggleSortOrder}
                className={style.btn}
            >
                Toggle Sort Order
            </button>
            <ul
                className={style.users}
            >
                {sortedUsers.map((user) => (
                    <User
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        address={user.address}
                    />
                ))}
            </ul>
        </div>
    );
};

export default React.memo(UserList);
