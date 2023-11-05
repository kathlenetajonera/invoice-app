import { ReactNode } from 'react';

type Props = {
    type?: 'submit' | 'button';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'delete';
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
};

const Button = ({
    type = 'button',
    variant,
    label,
    icon,
    onClick,
    loading,
    disabled,
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
            } ${
                disabled ? 'opacity-40 pointer-events-none' : ''
            } rounded-full h-12 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80`}
            onClick={onClick}
        >
            {icon && <span className="mr-3">{icon}</span>}
            {loading && (
                <span
                    className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                />
            )}
            {label}
        </button>
    );
};

export default Button;
