import { useEffect, useRef, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { SelectFieldProps } from '../types';
import { inputClassName, labelClassName } from '../TextField';

const SelectField = ({ name, label, options }: SelectFieldProps) => {
    const [_, meta, helpers] = useField(name);
    const { setValue } = helpers;

    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef(null);

    const handleClick = (value: string) => {
        setValue(value);
    };

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (e.target === ref.current) return;
            setShowDropdown(false);
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative mb-6 md:mb-5">
            <div className="flex justify-between items-center">
                <label className={labelClassName}>{label}</label>
                <ErrorMessage
                    name={name}
                    component="span"
                    className="text-red text-sm"
                />
            </div>
            <button
                ref={ref}
                type="button"
                className={`${inputClassName} ${
                    meta.touched && meta.error ? 'border-red' : ''
                } pt-1 text-left bg-arrow-down bg-no-repeat bg-[95%]`}
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span>{meta.value}</span>
            </button>
            <ul
                className={`absolute bottom-0 left-0 translate-y-[105%] w-full bg-white dark:bg-dark-card shadow-dropdown rounded-lg ${
                    showDropdown
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                {options.map(({ value, label }) => (
                    <li
                        key={value}
                        className="flex items-center px-4 h-[3.125rem] border-b-[1px] border-b-input dark:border-b-gray last:border-b-0 text-black dark:text-white font-semibold cursor-pointer transition-[color] hover:text-violet"
                        onClick={() => handleClick(label)}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectField;
