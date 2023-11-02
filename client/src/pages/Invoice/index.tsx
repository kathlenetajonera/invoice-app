import { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { networkRequest } from '../../utils/networkRequest';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import Container from '../../components/Layout/Container';
import StatusBar from '../../components/StatusBar';
import InvoiceDetails from '../../components/InvoiceDetails';

type Params = {
    referenceNumber: string;
};

function Invoice({ match }: RouteComponentProps<Params>) {
    const referenceNumber = match?.params?.referenceNumber;
    const [invoice, setInvoice] = useState(null);

    const fetchData = async () => {
        const data = await networkRequest(`api/invoice/${referenceNumber}`);

        if (data) {
            setInvoice(data);
        }
    };

    useEffect(() => {
        if (referenceNumber) {
            fetchData();
        }
    }, []);

    if (invoice) {
        return (
            <Container>
                <Link to="/" className="flex items-center text-sm mb-6">
                    <ArrowLeft />
                    <span className="ml-6">Go back</span>
                </Link>
                <StatusBar
                    status={invoice.status}
                    refNumber={invoice.referenceNumber}
                />
                <InvoiceDetails data={invoice} />
            </Container>
        );
    }

    return <></>;
}

export default Invoice;
