import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function SuccessAlert({ message }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        isOpen && (
            <div className="dm-flex-row-center">
                <div className="dm-success-alert-wrapper" role="alert">
                    <div className="flex items-center justify-center">
                        <div className="py-1">
                            <FaCheckCircle
                                className="h-6 w-6 text-green-600"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="ml-2">
                            <p className="dm-text-size">{message}</p>
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 p-1">
                            <button
                                onClick={handleClose}
                                className="text-green-700 hover:text-green-900"
                            >
                                <FaTimesCircle
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default SuccessAlert;
