import { Form, Formik } from 'formik';
import TextField from '../FormElements/TextField';
import SelectField from '../FormElements/SelectField';
import DateField from '../FormElements/DateField';
import ItemList from './ItemList';
import Button from '../Button';
import Close from '../Icons/Close';

type Props = {
    showForm: boolean;
    setShowForm: (show: boolean) => void;
};

const initialValues = {
    referenceNumber: '',
    status: '',
    date: '',
    payment_date: '',
    paymentTerms: '',
    projectDescription: '',
    billFrom: {
        streetAddress: '',
        city: '',
        postCode: '',
        country: '',
    },
    billTo: {
        clientName: '',
        clientEmail: '',
        streetAddress: '',
        city: '',
        postCode: '',
        country: '',
    },
    items: [
        {
            name: '',
            qty: undefined,
            price: undefined,
            total: undefined,
        },
    ],
};

const InvoiceForm = ({ showForm, setShowForm }: Props) => {
    const handleSubmit = (data: any) => {
        console.log('\x1b[36m%s\x1b[0m', 'submit invoice', data);
    };

    return (
        <>
            <div
                id="invoice-form"
                className={`fixed top-0 left-0 bottom-0 bg-white w-form-container ml-[calc(5.813rem-1rem)] p-12 overflow-y-auto z-10 transition-transform duration-500 ${
                    showForm ? 'translate-x-0' : '-translate-x-full'
                } lg:ml-0 lg:mt-navbar md:w-full md:p-6`}
            >
                <div className="mb-8 md:flex md:items-center md:justify-between">
                    <h2 className="text-3xl font-semibold">New Invoice</h2>
                    <Close
                        customClass="hidden md:block"
                        onClick={() => setShowForm(false)}
                    />
                </div>

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        <div className="mb-10">
                            <p className="text-violet mb-4">Bill From</p>
                            <TextField
                                name="billFrom.streetAddress"
                                label="Street address"
                            />

                            <div className="grid grid-cols-3 gap-6 -mb-6 md:gap-3">
                                <TextField name="billFrom.city" label="City" />
                                <TextField
                                    name="billFrom.postCode"
                                    label="Post Code"
                                />
                                <TextField
                                    name="billFrom.country"
                                    label="Country"
                                />
                            </div>
                        </div>
                        <div className="mb-10">
                            <p className="text-violet mb-4">Bill To</p>
                            <TextField
                                name="billTo.clientName"
                                label="Client's Name"
                            />
                            <TextField
                                name="billTo.clientEmail"
                                label="Client's Email"
                            />
                            <TextField
                                name="billTo.streetAddress"
                                label="Street Address"
                            />

                            <div className="grid grid-cols-3 gap-6 md:gap-3">
                                <TextField name="billTo.city" label="City" />
                                <TextField
                                    name="billTo.postCode"
                                    label="Post Code"
                                />
                                <TextField
                                    name="billTo.country"
                                    label="Country"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6 md:gap-3">
                                <DateField name="date" label="Invoice Date" />
                                <SelectField />
                            </div>

                            <TextField
                                name="projectDescription"
                                label="Project Description"
                            />
                        </div>
                        <div className="mb-12">
                            <h3 className="text-2xl text-gray">Item List</h3>
                            <ItemList />
                        </div>
                        <div className="flex items-center justify-between">
                            <Button type="tertiary" label="Discard" />

                            <div className="flex items-center">
                                <span className="mr-2">
                                    <Button
                                        type="secondary"
                                        label="Save as Draft"
                                    />
                                </span>
                                <Button label="Save & Send" />
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>

            <div
                className={`fixed inset-0 bg-black transition-opacity duration-500 ${
                    showForm
                        ? 'opacity-60 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setShowForm(false)}
            />
        </>
    );
};

export default InvoiceForm;
