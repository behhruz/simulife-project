import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FunctionLeft = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    return (
        <>
            <div className="flex">
                <button onClick={() => navigate(-1)} className="back-button mr-4">
                    <i className="fa-solid fa-arrow-left text-black text-[20px]"></i>
                </button>
            </div>
        </>

    );
};

export default FunctionLeft;
