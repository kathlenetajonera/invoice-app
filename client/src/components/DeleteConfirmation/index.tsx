import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { networkRequest } from '../../utils/networkRequest';
import Button from '../Button';
import Overlay from '../Overlay';

type Props = {
    show: boolean;
    setShow: (val: boolean) => void;
    refNumber: string;
};

const DeleteConfirmation = ({ show, setShow, refNumber }: Props) => {
    let history = useHistory();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            await networkRequest(`api/invoice/${refNumber}`, {
                method: 'DELETE',
            });

            history.push('/');
            setIsDeleting(false);
        } catch (error) {
            console.log('\x1b[36m%s\x1b[0m', 'Error ', error);
            setIsDeleting(false);
        }
    };

    return (
        <>
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 ${
                    show
                        ? '-translate-y-1/2 opacity-100 pointer-events-auto'
                        : '-translate-y-1/3 opacity-0 pointer-events-none'
                } transition-all duration-300 bg-white dark:bg-dark-card w-[30rem] p-8 rounded-lg z-10 md:w-[90%]`}
            >
                <h3 className="text-2xl font-medium dark:text-white">
                    Confirm Deletion
                </h3>

                <p className="text-gray font-light my-4">
                    Are you sure you want to delete invoice #{refNumber}? This
                    action cannot be undone.
                </p>

                <div className="flex justify-end">
                    <span className="mr-3">
                        <Button
                            variant="tertiary"
                            label="Cancel"
                            onClick={() => setShow(false)}
                        />
                    </span>
                    <Button
                        variant="delete"
                        label="Delete"
                        onClick={handleDelete}
                        loading={isDeleting}
                    />
                </div>
            </div>

            <Overlay show={show} setShow={setShow} />
        </>
    );
};

export default DeleteConfirmation;
