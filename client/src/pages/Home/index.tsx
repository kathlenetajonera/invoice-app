import Button from '../../components/Button';
import Item from '../../components/Item';
import Container from '../../components/Layout/Container';
import StatusFilter from '../../components/StatusFilter';

function Home() {
    return (
        <Container>
            <div className="relative flex justify-between items-center mb-14">
                <div>
                    <h1 className="text-[2rem] leading-9 font-semibold">
                        Invoices
                    </h1>
                    <p className="text-gray">There are 10 total invoices</p>
                </div>

                <div className="flex items-center">
                    <StatusFilter />
                    <Button />
                </div>
            </div>

            <div>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </Container>
    );
}

export default Home;
