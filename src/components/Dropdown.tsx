'use client'
import React, { useState } from 'react';

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        "Matching (from high to low)",
        "Matching (from low to high)",
        "Price (from low to high)",
        "Price (from high to low)",
        "Distance (from low to high)",
        "Distance (from high to low)"
    ];

    const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex justify-center items-center">
            <label htmlFor="dropdown"></label>
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="w-full p-1 text-xs border border-zinc-600">
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
