import { useEffect, useState } from 'react';
import { networkRequest } from '../../utils/networkRequest';
import { InvoiceType } from '../../components/InvoiceForm/types';
import { motion } from 'framer-motion';
import { cardVariant, containerVariant } from './transitions';
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
    const [invoicesToRender, setInvoicesToRender] = useState<InvoiceType[]>([]);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await networkRequest('api/invoice');

        if (data && data.length) {
            setInvoices(data);
            setInvoicesToRender(data);
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
                    <h1 className="text-[2rem] leading-9 font-semibold dark:text-white">
                        Invoices
                    </h1>
                    <p
                        className={`text-gray ${
                            invoicesToRender.length === 0
                                ? 'opacity-0'
                                : 'opacity-100'
                        }`}
                    >
                        <span className="md:hidden">There are</span>{' '}
                        {invoicesToRender.length}{' '}
                        <span className="md:hidden">total</span> invoices
                    </p>
                </div>

                <div className="flex items-center">
                    <StatusFilter
                        invoices={invoices}
                        setInvoicesToRender={setInvoicesToRender}
                    />
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
                    <motion.div
                        key={invoicesToRender.length}
                        variants={containerVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        {invoicesToRender.map((invoice: InvoiceType) => (
                            <motion.div
                                key={invoice._id}
                                variants={cardVariant}
                            >
                                <Card {...invoice} />
                            </motion.div>
                        ))}
                    </motion.div>
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
