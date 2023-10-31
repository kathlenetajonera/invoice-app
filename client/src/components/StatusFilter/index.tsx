import { useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox';
import ArrowDown from '../Icons/ArrowDown';

const StatusFilter = () => {
    const [showFilter, setShowFilter] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            const clickOutside = e.target?.nodeName === 'DIV';
            if (clickOutside) {
                setShowFilter(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <span className="flex items-baseline mr-8 md:mr-4">
                <button
                    ref={ref}
                    className="mr-3 text-sm font-medium"
                    onClick={() => setShowFilter(!showFilter)}
                >
                    Filter<span className="md:hidden"> by Status</span>
                </button>
                <ArrowDown />
            </span>

            <div
                className={`w-[11.25rem] absolute bottom-0 translate-y-[115%] bg-white p-6 rounded-lg shadow-dropdown z-10 transition-opacity ${
                    showFilter
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                } md:-left-[1rem]`}
            >
                <Checkbox />
                <Checkbox />
                <Checkbox />
            </div>
        </div>
    );
};

export default StatusFilter;
