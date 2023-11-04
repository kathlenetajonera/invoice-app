import { ReactNode } from 'react';
import Plus from '../Icons/Plus';

type Props = {
    type?: 'submit' | 'button';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'delete';
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    customClass?: string;
};

const Button = ({
    type = 'button',
    variant,
    label,
    icon,
    onClick,
    customClass,
}: Props) => {
    const buttonType = variant || 'primary';

    const variants = {
        primary: 'bg-violet text-white',
        secondary: 'bg-navbar text-[#888eb0]',
        tertiary: 'bg-light-bg text-[#7e88c3]',
        delete: 'bg-red text-white',
    };

    return (
        <button
            type={type}
            className={`${variants[buttonType]} ${
                icon ? 'pl-2 pr-4' : 'px-6'
            } rounded-full h-12 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80 ${customClass}`}
            onClick={onClick}
        >
            {icon && (
                <span className="mr-3">
                    <Plus />
                </span>
            )}
            {label}
        </button>
    );
};

export default Button;
