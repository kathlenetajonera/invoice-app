const InvoiceDetails = () => {
    return (
        <div className="bg-white px-8 py-10 shadow-item text-gray text-15 rounded-lg md:mb-24">
            <div className="flex justify-between md:flex-col md:gap-6">
                <div>
                    <p className="text-lg">
                        #<span className="text-black font-bold">ASDF</span>
                    </p>
                    <p>Lorem ipsum</p>
                </div>

                <div>
                    <p>15 Waterview Crescent</p>
                    <p>O'Halloran Hill</p>
                    <p>5158</p>
                    <p>Australia</p>
                </div>
            </div>

            <div className="flex justify-between mt-6 mb-8 max-w-[85%] md:max-w-full md:flex-wrap">
                <div>
                    <div className="mb-8">
                        <p>Invoice Date</p>
                        <p className="text-black text-lg font-semibold">
                            30 Oct 2023
                        </p>
                    </div>
                    <div>
                        <p>Payment Date</p>
                        <p className="text-black text-lg font-semibold">
                            30 Oct 2023
                        </p>
                    </div>
                </div>
                <div>
                    <p>Bill To</p>
                    <p className="text-black text-lg font-semibold">
                        Lorem ipsum
                    </p>

                    <p>15 Waterview Crescent</p>
                    <p>O'Halloran Hill</p>
                    <p>5158</p>
                    <p>Australia</p>
                </div>
                <div className="md:mt-6">
                    <p>Sent To</p>
                    <p className="text-black text-lg font-semibold">
                        test@email.com
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
                        <div className="flex font-semibold md:items-center">
                            <div className="flex-1 basis-1/2">
                                <p className="text-black">Lorem ipsum</p>

                                <div className="hidden md:block">
                                    <p>1 x P 100.00</p>
                                </div>
                            </div>
                            <p className="flex-1 md:hidden">1</p>
                            <p className="flex-1 md:hidden text-right">
                                P 100.00
                            </p>
                            <p className="flex-1 text-right text-black md:whitespace-nowrap">
                                P 100.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-navbar p-8 rounded-b-lg text-white">
                    <p className="text-base md:text-sm">Amount Due</p>
                    <p className="text-3xl font-bold md:text-2xl">P100.00</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetails;
