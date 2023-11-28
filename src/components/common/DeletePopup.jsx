import React from 'react';

const DeletePopup = ({ isOpen, onCancel, onDelete }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
            <div className="p-4 bg-white shadow-[#32325d40_0px_6px_12px_-2px] rounded-xl w-96">
                <h2 className="mb-4 text-lg font-semibold text-center">Delete Confermation</h2>
                <p className="mb-6 text-center text-gray-600">Are you sure you want to delete?</p>
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 mr-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeletePopup;
