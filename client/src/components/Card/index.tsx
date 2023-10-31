import { Link } from 'react-router-dom';
import ArrowRight from '../Icons/ArrowRight';
import Status from '../Status';

const Card = () => {
    return (
        <Link
            to={`/invoice`}
            className="bg-white flex items-center justify-between py-4 px-6 rounded-lg text-15 text-gray mb-4 shadow-item cursor-pointer transition-[border] border-[1px] border-transparent hover:border-violet md:flex-col md:p-6 md:pb-4"
        >
            <div className="flex items-center md:w-full md:justify-between md:items-start">
                <div className="flex items-center md:flex-col md:items-start">
                    <p className="mr-10 md:mb-4">
                        #<span className="text-black font-bold">ASDF</span>
                    </p>
                    <p className="mr-10">Due 19 Aug 2021</p>
                </div>
                <p className="mr-10 md:mr-0">Jensen Huang</p>
            </div>
            <div className="flex items-center md:w-full md:justify-between">
                <p className="mr-9 text-xl text-black font-semibold">
                    P1,800.90
                </p>
                <span className="relative mr-4 md:mr-0 md:-top-3">
                    <Status />
                </span>
                <ArrowRight customClass="md:hidden" />
            </div>
        </Link>
    );
};

export default Card;
