import { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { networkRequest } from '../../utils/networkRequest';
import { InvoiceType } from '../../components/InvoiceForm/types';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import Container from '../../components/Layout/Container';
import StatusBar from '../../components/StatusBar';
import InvoiceDetails from '../../components/InvoiceDetails';
import InvoiceForm from '../../components/InvoiceForm';
import Loading from './loading';

type Params = {
    referenceNumber: string;
};

function Invoice({ match }: RouteComponentProps<Params>) {
    const referenceNumber = match?.params?.referenceNumber;
    const [invoice, setInvoice] = useState<InvoiceType | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await networkRequest(`api/invoice/${referenceNumber}`);

        if (data) {
            setInvoice(data);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        if (referenceNumber) {
            fetchData();
        }
    }, []);

    return (
        <Container>
            <Link to="/" className="flex items-center text-sm mb-6">
                <ArrowLeft />
                <span className="ml-6">Go back</span>
            </Link>
            {isLoading && <Loading />}
            {invoice ? (
                <>
                    <StatusBar
                        status={invoice.status as 'pending' | 'draft' | 'paid'}
                        refNumber={invoice.referenceNumber || ''}
                        setShowForm={setShowForm}
                        setInvoice={setInvoice}
                    />
                    <InvoiceDetails data={invoice} />
                    <InvoiceForm
                        showForm={showForm}
                        setShowForm={setShowForm}
                        updateState={(data) => setInvoice(data)}
                        initialData={invoice}
                    />
                </>
            ) : (
                <></>
            )}
        </Container>
    );
}

export default Invoice;
