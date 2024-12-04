import { useState } from 'react';

const useUserFilter = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return { filter, handleFilterChange };
};

export default useUserFilter;
