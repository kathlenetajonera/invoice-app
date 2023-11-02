import { useEffect, useState } from 'react';
import { networkRequest } from '../../utils/networkRequest';
import Container from '../../components/Layout/Container';
import StatusFilter from '../../components/StatusFilter';
import InvoiceForm from '../../components/InvoiceForm';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Plus from '../../components/Icons/Plus';

function Home() {
    const [showForm, setShowForm] = useState(false);
    const [invoices, setInvoices] = useState([]);

    const fetchData = async () => {
        const data = await networkRequest('api/invoice');

        if (data && data.length) {
            setInvoices(data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <div className="relative flex justify-between items-center mb-14">
                <div>
                    <h1 className="text-[2rem] leading-9 font-semibold">
                        Invoices
                    </h1>
                    <p className="text-gray">
                        <span className="md:hidden">There are</span> 10 total
                        invoices
                    </p>
                </div>

                <div className="flex items-center">
                    <StatusFilter />
                    <Button
                        icon={<Plus />}
                        label={window.innerWidth < 768 ? 'New' : 'New invoice'}
                        onClick={() => setShowForm(true)}
                    />
                </div>
            </div>

            <div>
                {invoices.map((invoice) => (
                    <Card key={invoice._id} {...invoice} />
                ))}
            </div>

            <InvoiceForm showForm={showForm} setShowForm={setShowForm} />
        </Container>
    );
}

export default Home;
