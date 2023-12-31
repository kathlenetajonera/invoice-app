import { formatCurrency, formatToDateString } from '../../utils/functions';
import { InvoiceType } from '../InvoiceForm/types';

type Props = {
    data: InvoiceType;
};

const InvoiceDetails = ({ data }: Props) => {
    const { referenceNumber, projectDescription, date, paymentDate } = data;
    const {
        streetAddress: fromStreetAddress,
        city: fromCity,
        postCode: fromPostCode,
        country: fromCountry,
    } = data.billFrom;
    const {
        clientName,
        clientEmail,
        streetAddress: toStreetAddress,
        city: toCity,
        postCode: toPostCode,
        country: toCountry,
    } = data.billTo;

    const items = data.items;
    const amountDue = items.reduce((total, acc) => total + acc.total, 0);

    return (
        <div className="bg-white dark:bg-dark-card px-8 py-10 shadow-item text-gray dark:text-[#DFE3FA] text-15 rounded-lg md:mb-24">
            <div className="flex justify-between md:flex-col md:gap-6">
                <div>
                    <p className="text-lg">
                        #
                        <span className="text-black dark:text-white font-bold">
                            {referenceNumber}
                        </span>
                    </p>
                    <p>{projectDescription}</p>
                </div>

                <div>
                    <p>{fromStreetAddress}</p>
                    <p>{fromCity}</p>
                    <p>{fromPostCode}</p>
                    <p>{fromCountry}</p>
                </div>
            </div>

            <div className="flex justify-between mt-6 mb-8 max-w-[85%] md:max-w-full md:flex-wrap">
                <div className="md:flex-1">
                    <div className="mb-8">
                        <p>Invoice Date</p>
                        <p className="text-black dark:text-white text-lg font-semibold">
                            {date ? formatToDateString(date) : 'N/A'}
                        </p>
                    </div>
                    <div>
                        <p>Payment Date</p>
                        <p className="text-black dark:text-white text-lg font-semibold">
                            {paymentDate
                                ? formatToDateString(paymentDate)
                                : 'N/A'}
                        </p>
                    </div>
                </div>
                <div className="md:flex-1">
                    <p>Bill To</p>
                    <p className="text-black dark:text-white text-lg font-semibold">
                        {clientName || 'N/A'}
                    </p>

                    <p>{toStreetAddress}</p>
                    <p>{toCity}</p>
                    <p>{toPostCode}</p>
                    <p>{toCountry}</p>
                </div>
                <div className="md:basis-full md:mt-6">
                    <p>Sent To</p>
                    <p className="text-black dark:text-white text-lg font-semibold">
                        {clientEmail || 'N/A'}
                    </p>
                </div>
            </div>

            <div>
                <div className="bg-light-bg dark:bg-dark-lighter p-8 rounded-t-lg md:p-6">
                    <div className="flex mb-6 md:hidden">
                        <p className="basis-1/3">Item Name</p>
                        <p className="flex-1 text-right">QTY.</p>
                        <p className="flex-1 text-right">Price</p>
                        <p className="flex-1 text-right">Total</p>
                    </div>

                    <div>
                        {items.map(({ _id, name, qty, price, total }) => (
                            <div
                                key={_id}
                                className="flex font-medium mb-4 md:items-start dark:text-white"
                            >
                                <div className="basis-1/3 md:flex-1">
                                    <p className="text-black dark:text-white">
                                        {name}
                                    </p>
                                    <div className="text-sm hidden md:block">
                                        <p>
                                            {qty} x {price}
                                        </p>
                                    </div>
                                </div>
                                <p className="flex-1 text-right md:hidden">
                                    {qty}
                                </p>
                                <p className="flex-1 text-right md:hidden">
                                    {price}
                                </p>
                                <p className="flex-1 text-right text-black dark:text-white md:whitespace-nowrap">
                                    {formatCurrency(total)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between bg-navbar dark:bg-[#0c0e16] p-8 rounded-b-lg text-white">
                    <p className="text-base md:text-sm">Amount Due</p>
                    <p className="text-3xl font-bold md:text-2xl">
                        {formatCurrency(amountDue)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetails;
