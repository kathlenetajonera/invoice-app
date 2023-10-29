import { variants } from './data';

const Status = () => {
    const type = 'paid';

    return (
        <div
            className={`flex items-baseline ${variants[type].bg} px-8 py-2 rounded-lg`}
        >
            <span
                className={`block w-2 h-2 ${variants[type].dot} rounded-full mr-2`}
            />
            <p className={`text-sm ${variants[type].text}`}>Paid</p>
        </div>
    );
};

export default Status;
