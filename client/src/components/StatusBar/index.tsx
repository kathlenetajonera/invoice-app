import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { networkRequest } from '../../utils/networkRequest';
import { InvoiceType } from '../InvoiceForm/types';
import dayjs from 'dayjs';
import Status from '../Status';
import Button from '../Button';

type Props = {
    status: 'paid' | 'pending' | 'draft';
    refNumber: string;
    setShowForm: (val: boolean) => void;
    setInvoice: (data: any) => void;
};

const StatusBar = ({ status, refNumber, setShowForm, setInvoice }: Props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    let history = useHistory();

    const handleDelete = async () => {
        try {
            await networkRequest(`api/invoice/${refNumber}`, {
                method: 'DELETE',
            });

            history.push('/');
        } catch (error) {
            console.log('\x1b[36m%s\x1b[0m', 'Error ', error);
        }
    };

    const handleMarkAsPaid = async () => {
        try {
            setIsUpdating(true);

            const payload = {
                status: 'paid',
                paymentDate: dayjs().format('MM/DD/YYYY'),
            };
            const res = await networkRequest(`api/invoice/${refNumber}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res._id) {
                setInvoice((data: InvoiceType) => {
                    return {
                        ...data,
                        ...payload,
                    };
                });
            }

            setIsUpdating(false);
        } catch (error) {
            console.log('\x1b[36m%s\x1b[0m', 'Error ', error);
        }
    };

    return (
        <div className="flex justify-between bg-white py-6 px-8 rounded-lg shadow-item mb-6">
            <div className="flex items-center md:w-full md:justify-between">
                <p className="text-gray mr-4">Status</p>
                <Status type={status} />
            </div>
            <div className="flex items-center md:fixed md:bottom-0 md:left-0 md:bg-white md:w-full md:flex md:justify-center md:p-6">
                <span className="mr-2">
                    <Button
                        variant="tertiary"
                        label="Edit"
                        onClick={() => setShowForm(true)}
                    />
                </span>
                <span className="mr-2">
                    <Button
                        variant="delete"
                        label="Delete"
                        onClick={handleDelete}
                    />
                </span>
                <Button
                    variant="primary"
                    label="Mark as paid"
                    onClick={handleMarkAsPaid}
                    loading={isUpdating}
                    disabled={status === 'paid'}
                />
            </div>
        </div>
    );
};

export default StatusBar;
