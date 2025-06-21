import { useState } from 'react';

export const useUserSort = () => {
    const [sortOrder, setSortOrder] = useState('asc');

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return { sortOrder, toggleSortOrder };
};


