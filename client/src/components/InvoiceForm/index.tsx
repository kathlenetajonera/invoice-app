import { useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import cryptoRandomString from 'crypto-random-string';
import { networkRequest } from '../../utils/networkRequest';
import { initialValues, paymentTerms, validationSchema } from './data';
import { InvoiceType } from './types';
import TextField from '../FormElements/TextField';
import SelectField from '../FormElements/SelectField';
import DateField from '../FormElements/DateField';
import ItemList from './ItemList';
import Button from '../Button';
import Close from '../Icons/Close';

type Props = {
    showForm: boolean;
    setShowForm: (show: boolean) => void;
    updateState: (data: InvoiceType) => void;
    initialData?: InvoiceType | null;
};

const InvoiceForm = ({
    showForm,
    setShowForm,
    updateState,
    initialData,
}: Props) => {
    const [isSubmitting, setIsSubmitting] = useState('');
    const status = useRef(initialData?.status || 'pending');

    const handleSubmit = async (data: InvoiceType) => {
        setIsSubmitting(status.current);

        if (initialData) {
            submitForm(data, 'update');
            return;
        }

        const referenceNumber = cryptoRandomString({
            length: 6,
            type: 'alphanumeric',
        });
        const payload = {
            ...data,
            referenceNumber,
            status: status.current,
            paymentDate: '',
        };

        submitForm(payload, 'create');
    };

    const submitForm = async (payload: InvoiceType, action: string) => {
        try {
            const isUpdate = action === 'update';
            const endpoint = `api/invoice${
                isUpdate ? `/${payload.referenceNumber}` : ''
            }`;
            const res = await networkRequest(endpoint, {
                method: isUpdate ? 'PUT' : 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res._id) {
                setShowForm(false);
                setIsSubmitting('');
                updateState(res);
            }
        } catch (error) {
            console.log('\x1b[36m%s\x1b[0m', 'Error: ', error);
        }
    };

    const handleDiscard = (resetForm: () => void) => {
        resetForm();
        setShowForm(false);
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

                <Formik
                    initialValues={initialData || initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ resetForm }) => (
                        <Form>
                            <div className="mb-10">
                                <p className="text-violet mb-4">Bill From</p>
                                <TextField
                                    name="billFrom.streetAddress"
                                    label="Street address"
                                />

                                <div className="grid grid-cols-3 gap-6 -mb-6 md:gap-3">
                                    <TextField
                                        name="billFrom.city"
                                        label="City"
                                    />
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
                                    <TextField
                                        name="billTo.city"
                                        label="City"
                                    />
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
                                    <DateField
                                        name="date"
                                        label="Invoice Date"
                                    />
                                    <SelectField
                                        name="paymentTerms"
                                        label="Payment Terms"
                                        options={paymentTerms}
                                    />
                                </div>

                                <TextField
                                    name="projectDescription"
                                    label="Project Description"
                                />
                            </div>
                            <div className="mb-12">
                                <h3 className="text-2xl text-gray">
                                    Item List
                                </h3>
                                <ItemList name="items" />
                            </div>
                            {initialData ? (
                                <div
                                    className={`flex justify-end items-center ${
                                        isSubmitting
                                            ? 'pointer-events-none'
                                            : 'pointer-events-auto'
                                    }`}
                                >
                                    <span className="mr-2">
                                        <Button
                                            variant="tertiary"
                                            label="Cancel"
                                            onClick={() =>
                                                handleDiscard(resetForm)
                                            }
                                        />
                                    </span>
                                    <Button
                                        type="submit"
                                        label="Save Changes"
                                        loading={isSubmitting.length > 0}
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center justify-between">
                                    <Button
                                        variant="tertiary"
                                        label="Discard"
                                        onClick={() => handleDiscard(resetForm)}
                                    />

                                    <div
                                        className={`flex items-center ${
                                            isSubmitting
                                                ? 'pointer-events-none'
                                                : 'pointer-events-auto'
                                        }`}
                                    >
                                        <span className="mr-2">
                                            <Button
                                                type="submit"
                                                variant="secondary"
                                                label="Save as Draft"
                                                loading={
                                                    isSubmitting === 'draft'
                                                }
                                                onClick={() =>
                                                    (status.current = 'draft')
                                                }
                                            />
                                        </span>
                                        <Button
                                            type="submit"
                                            label="Save & Send"
                                            loading={isSubmitting === 'pending'}
                                            onClick={() =>
                                                (status.current = 'pending')
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                        </Form>
                    )}
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
