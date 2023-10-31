import { useState } from 'react';
import Container from '../../components/Layout/Container';
import StatusFilter from '../../components/StatusFilter';
import InvoiceForm from '../../components/InvoiceForm';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Plus from '../../components/Icons/Plus';

function Home() {
    const [showForm, setShowForm] = useState(false);

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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <InvoiceForm showForm={showForm} setShowForm={setShowForm} />
        </Container>
    );
}

export default Home;
