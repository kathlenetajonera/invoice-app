import ArrowRight from '../Icons/ArrowRight';
import Status from '../Status';

const Item = () => {
    return (
        <div className="bg-white flex items-center justify-between py-4 px-6 rounded-lg text-[0.938rem] text-gray mb-4 shadow-item">
            <div className="flex items-center">
                <p className="mr-10">
                    #<span className="text-black font-bold">ASDF</span>
                </p>
                <p className="mr-10">Due 19 Aug 2021</p>
                <p className="mr-10">Jensen Huang</p>
            </div>
            <div className="flex items-center">
                <p className="mr-9 text-xl text-black font-semibold">
                    P1,800.90
                </p>
                <span className="mr-4">
                    <Status />
                </span>
                <ArrowRight />
            </div>
        </div>
    );
};

export default Item;
