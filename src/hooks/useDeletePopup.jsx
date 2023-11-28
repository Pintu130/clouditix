import { useState } from 'react';

const useDeletePopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedData, setSelectedData] = useState();

    const openPopup = (data) => {
        setSelectedData(data)
        setIsPopupOpen(true)
    }
    const closePopup = () => {
        setIsPopupOpen(false)
    }

    return { isPopupOpen, openPopup, closePopup, selectedData };
};

export default useDeletePopup;
