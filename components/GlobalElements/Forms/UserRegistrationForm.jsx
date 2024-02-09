import React, { useState } from 'react';
import Image from 'next/image';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        // Basic validation
        if (!formData.name) {
            isValid = false;
            tempErrors.name = 'Name is required';
        }
        if (!formData.email) {
            isValid = false;
            tempErrors.email = 'Email is required';
        }
        if (!formData.password) {
            isValid = false;
            tempErrors.password = 'Password is required';
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
            // Handle error response from the server
            if (data.error) setErrors({ ...errors, email: data.error });
        } else {
            // Handle success (maybe redirect or clear form)
        }
    };

    return (
        <div className="grid md:grid-cols-2  grid-cols-1 gap-4 mt-[11rem]">
            <div className="relative">
                <Image
                    src="/assets/images/place/trenchers_front_area_co_11.jpg" // Replace with your image path
                    alt="Descriptive Alt Text"
                    fill
                    className="absolute"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="border p-2 w-full"
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border p-2 w-full"
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="border p-2 w-full"
                    />
                    {errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 w-full"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
