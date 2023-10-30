import { useEffect, useRef, useState } from 'react';
import { inputClassName, labelClassName } from '../TextField';

const SelectField = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef(null);

    const handleClick = (value: string) => {
        console.log('\x1b[36m%s\x1b[0m', 'selected value', value);
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
        <div className="relative mb-6">
            <label className={labelClassName}>Street Address</label>
            <button
                ref={ref}
                type="button"
                className={`${inputClassName} text-left bg-arrow-down bg-no-repeat bg-[95%]`}
                onClick={() => setShowDropdown(!showDropdown)}
            ></button>
            <ul
                className={`absolute bottom-0 left-0 translate-y-full w-full bg-white shadow-dropdown rounded-lg ${
                    showDropdown
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                <li
                    className="flex items-center px-4 h-[3.125rem] border-b-[1px] border-b-input text-black font-semibold cursor-pointer transition-[color] hover:text-violet"
                    onClick={() => handleClick('1')}
                >
                    Net 1 day
                </li>
                <li
                    className="flex items-center px-4 h-[3.125rem] text-black font-semibold cursor-pointer transition-[color] hover:text-violet"
                    onClick={() => handleClick('2')}
                >
                    Net 7 days
                </li>
            </ul>
        </div>
    );
};

export default SelectField;
