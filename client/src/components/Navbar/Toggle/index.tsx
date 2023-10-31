import { useState } from 'react';
import Moon from '../../Icons/Moon';
import Sun from '../../Icons/Sun';

const Toggle = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <div
            className="flex justify-center pb-8 cursor-pointer lg:pb-0 lg:pr-8"
            onClick={() => setIsDark(!isDark)}
        >
            {isDark ? <Moon /> : <Sun />}
        </div>
    );
};

export default Toggle;
