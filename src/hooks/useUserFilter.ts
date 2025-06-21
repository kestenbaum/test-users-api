import {ChangeEvent, useState} from 'react';

const useUserFilter = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return { filter, handleFilterChange };
};

export default useUserFilter;
