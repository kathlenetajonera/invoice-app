import { useEffect, useState } from 'react';
import { networkRequest } from '../../utils/networkRequest';
import { InvoiceType } from '../../components/InvoiceForm/types';
import Container from '../../components/Layout/Container';
import StatusFilter from '../../components/StatusFilter';
import InvoiceForm from '../../components/InvoiceForm';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Plus from '../../components/Icons/Plus';
import Loading from './loading';

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [invoices, setInvoices] = useState<InvoiceType[]>([]);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await networkRequest('api/invoice');

        if (data && data.length) {
            setInvoices(data);
        }

        setIsLoading(false);
    };

    const updateList = (data: InvoiceType) => {
        setInvoices((list) => [...list, data]);
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
                    <p
                        className={`text-gray ${
                            invoices.length === 0 ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        <span className="md:hidden">There are</span>{' '}
                        {invoices.length} total invoices
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
                {isLoading ? (
                    <Loading />
                ) : (
                    invoices.map((invoice: InvoiceType) => (
                        <Card key={invoice._id} {...invoice} />
                    ))
                )}
            </div>

            <InvoiceForm
                showForm={showForm}
                setShowForm={setShowForm}
                updateState={updateList}
            />
        </Container>
    );
}

export default Home;
