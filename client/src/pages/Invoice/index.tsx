import { Link } from 'react-router-dom';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import Container from '../../components/Layout/Container';
import StatusBar from '../../components/StatusBar';
import InvoiceDetails from '../../components/InvoiceDetails';

function Invoice() {
    return (
        <Container>
            <Link to="/" className="flex items-center text-sm mb-6">
                <ArrowLeft />
                <span className="ml-6">Go back</span>
            </Link>
            <StatusBar />
            <InvoiceDetails />
        </Container>
    );
}

export default Invoice;
