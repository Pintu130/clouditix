import React, { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';

const AnimatedListView = ({ data, handleDelete }) => {
    const [listData, setListData] = useState(data);



    useEffect(() => {
        if (data?.length > 0) {
            setListData(data)

        } else {
            setListData([])
        }
    }, [data])

    return (
        <div className={`overflow-y-auto ${listData?.length > 0 && "border"}  rounded-md custom-scroll max-h-500px`}>
            <ul className="p-0 m-0 list-none">
                {listData.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="flex items-center justify-between p-2 transition duration-300 border-b border-gray-200 hover:bg-gray-100"
                        >
                            <span className='first-letter:uppercase'>{item.name}</span>
                            <button
                                onClick={() => handleDelete(item)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <AiTwotoneDelete />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default AnimatedListView;
