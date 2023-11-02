import { variants } from './data';

type Props = {
    type: 'paid' | 'pending' | 'draft';
};

const Status = ({ type }: Props) => {
    return (
        <div
            className={`flex items-baseline justify-center py-2 w-[105px] rounded-lg md:py-3 ${variants[type].bg}`}
        >
            <span
                className={`block w-2 h-2 ${variants[type].dot} rounded-full mr-2`}
            />
            <p className={`text-sm ${variants[type].text} capitalize`}>
                {type}
            </p>
        </div>
    );
};

export default Status;
