import { formatCurrency, formatToDateString } from '../../utils/functions';

const InvoiceDetails = ({ data }) => {
    const { referenceNumber, projectDescription, date } = data;
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
        <div className="bg-white px-8 py-10 shadow-item text-gray text-15 rounded-lg md:mb-24">
            <div className="flex justify-between md:flex-col md:gap-6">
                <div>
                    <p className="text-lg">
                        #
                        <span className="text-black font-bold">
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
                <div>
                    <div className="mb-8">
                        <p>Invoice Date</p>
                        <p className="text-black text-lg font-semibold">
                            {formatToDateString(date)}
                        </p>
                    </div>
                    <div>
                        <p>Payment Date</p>
                        <p className="text-black text-lg font-semibold">
                            {formatToDateString(date)}
                        </p>
                    </div>
                </div>
                <div>
                    <p>Bill To</p>
                    <p className="text-black text-lg font-semibold">
                        {clientName}
                    </p>

                    <p>{toStreetAddress}</p>
                    <p>{toCity}</p>
                    <p>{toPostCode}</p>
                    <p>{toCountry}</p>
                </div>
                <div className="md:mt-6">
                    <p>Sent To</p>
                    <p className="text-black text-lg font-semibold">
                        {clientEmail}
                    </p>
                </div>
            </div>

            <div>
                <div className="bg-light-bg p-8 rounded-t-lg md:p-6">
                    <div className="flex mb-6 md:hidden">
                        <p className="flex-1 basis-1/2">Item</p>
                        <p className="flex-1">QTY.</p>
                        <p className="flex-1 text-right">Price</p>
                        <p className="flex-1 text-right">Total</p>
                    </div>

                    <div>
                        {items.map(({ _id, name, qty, price, total }) => (
                            <div
                                key={_id}
                                className="flex font-semibold md:items-center"
                            >
                                <div className="flex-1 basis-1/2">
                                    <p className="text-black">{name}</p>

                                    <div className="hidden md:block">
                                        <p>
                                            {qty} x {formatCurrency(price)}
                                        </p>
                                    </div>
                                </div>
                                <p className="flex-1 md:hidden">{qty}</p>
                                <p className="flex-1 md:hidden text-right">
                                    {formatCurrency(price)}
                                </p>
                                <p className="flex-1 text-right text-black md:whitespace-nowrap">
                                    {formatCurrency(total)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between bg-navbar p-8 rounded-b-lg text-white">
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
