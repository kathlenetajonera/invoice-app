import { Link } from 'react-router-dom';
import { formatCurrency, formatToDateString } from '../../utils/functions';
import { InvoiceType } from '../InvoiceForm/types';
import ArrowRight from '../Icons/ArrowRight';
import Status from '../Status';

const Card = (props: InvoiceType) => {
    const { referenceNumber, status, date } = props;
    const { clientName } = props.billTo;

    const total = props.items.reduce(
        (total: number, acc) => acc.total + total,
        0
    );

    return (
        <Link
            to={`/invoice/${referenceNumber}`}
            className="bg-white flex items-center justify-between py-4 px-6 rounded-lg text-15 text-gray mb-4 shadow-item cursor-pointer transition-[border] border-[1px] border-transparent hover:border-violet md:flex-col md:p-6 md:pb-4"
        >
            <div className="flex items-center md:w-full md:justify-between md:items-start">
                <div className="flex items-center md:flex-col md:items-start">
                    <p className="w-20 mr-10 md:mb-4">
                        #
                        <span className="text-black font-bold">
                            {referenceNumber}
                        </span>
                    </p>
                    <p className="mr-10">Due {formatToDateString(date)}</p>
                </div>
                <p className="capitalize mr-10 md:mr-0">{clientName}</p>
            </div>
            <div className="flex items-center md:w-full md:justify-between">
                <p className="mr-9 text-xl text-black font-semibold">
                    {formatCurrency(total)}
                </p>
                <span className="relative mr-4 md:mr-0 md:-top-3">
                    <Status type={status as 'draft' | 'pending' | 'paid'} />
                </span>
                <ArrowRight customClass="md:hidden" />
            </div>
        </Link>
    );
};

export default Card;
