import { useState } from 'react';
import Checkbox from '../Checkbox';
import ArrowDown from '../Icons/ArrowDown';

const StatusFilter = () => {
    const [showFilter, setShowFilter] = useState(false);

    return (
        <>
            <div className="flex items-baseline mr-8">
                <button
                    className="mr-3 text-sm font-medium"
                    onClick={() => setShowFilter(!showFilter)}
                >
                    Filter by Status
                </button>
                <ArrowDown />
            </div>

            <div
                className={`w-[11.25rem] absolute bottom-0 translate-y-full bg-white p-6 rounded-lg shadow-item transition-opacity ${
                    showFilter
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                <Checkbox />
                <Checkbox />
                <Checkbox />
            </div>
        </>
    );
};

export default StatusFilter;
