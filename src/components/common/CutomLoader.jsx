import React from 'react';

const CustomLoader = ({ isTable = false }) => {
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-filter ${isTable ? "backdrop-blur-lg" : "backdrop-blur-sm"}`}>
            <div className="w-12 h-12 border-t-4 border-opacity-75 rounded-full animate-spin border-primary"></div>
        </div>
    );
};

export default CustomLoader;
