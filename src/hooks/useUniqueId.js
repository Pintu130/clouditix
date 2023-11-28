import { useState } from 'react';

function useUniqueId(prefix = 'id') {
    const [idCounter, setIdCounter] = useState(0);

    const generateUniqueId = () => {
        setIdCounter((prevCounter) => prevCounter + 1);
        return `${prefix}-${idCounter}`;
    };

    return generateUniqueId;
}

export default useUniqueId;
