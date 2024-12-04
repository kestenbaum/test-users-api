import { useState } from 'react';

const useUserSort = () => {
    const [sortOrder, setSortOrder] = useState('asc');

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return { sortOrder, toggleSortOrder };
};

export default useUserSort;
