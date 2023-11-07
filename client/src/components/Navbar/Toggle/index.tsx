import { useEffect, useState } from 'react';
import Moon from '../../Icons/Moon';
import Sun from '../../Icons/Sun';

const Toggle = () => {
    const darkModeSystem = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;
    const [isDark, setIsDark] = useState(false);

    const handleToggle = () => {
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
    };

    useEffect(() => {
        if (darkModeSystem) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, []);

    return (
        <div
            className="flex justify-center pb-8 cursor-pointer lg:pb-0 lg:pr-8"
            onClick={handleToggle}
        >
            {isDark ? <Moon /> : <Sun />}
        </div>
    );
};

export default Toggle;
