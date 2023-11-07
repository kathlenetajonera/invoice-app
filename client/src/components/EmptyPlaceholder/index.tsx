import image from '../../assets/illustration-empty.svg';

const EmptyPlaceholder = () => {
    return (
        <div className="text-center mt-24">
            <img src={image} alt="Empty" className="mx-auto" />
            <div className="mt-12">
                <h3 className="text-xl font-semibold dark:text-white">
                    There is nothing here
                </h3>
                <p className="text-gray font-light mt-4">
                    Create an invoice by clicking the
                    <br />
                    <b className="font-medium">New Invoice</b> button and get
                    started
                </p>
            </div>
        </div>
    );
};

export default EmptyPlaceholder;
