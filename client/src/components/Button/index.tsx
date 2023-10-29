import Plus from '../Icons/Plus';

const Button = () => {
    return (
        <button className="bg-violet rounded-full h-12 pl-2 pr-4 text-white flex items-center justify-center">
            <span className="mr-3">
                <Plus />
            </span>
            New invoice
        </button>
    );
};

export default Button;
