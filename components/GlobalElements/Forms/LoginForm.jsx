// components/LoginForm.js
import React, { useState } from 'react';
import Image from 'next/image';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

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
        if (!validate()) return;
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log('Data fetched:', data);
            return data;
        } catch (error) {
            console.error('Failed to fetch data:', error);
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
                    <div>
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
                    </div>

                    <div>
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
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 w-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
