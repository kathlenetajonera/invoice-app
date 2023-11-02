import { useHistory } from 'react-router-dom';
import { networkRequest } from '../../utils/networkRequest';
import Status from '../Status';
import Button from '../Button';

const StatusBar = ({ status, refNumber }) => {
    let history = useHistory();

    const handleDelete = async () => {
        console.log('\x1b[36m%s\x1b[0m', 'delete', refNumber);
        try {
            await networkRequest(`api/invoice/${refNumber}`, {
                method: 'DELETE',
            });

            history.push('/');
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
                <Button type="tertiary" label="Edit" customClass="mr-2" />
                <Button
                    type="delete"
                    label="Delete"
                    customClass="mr-2"
                    onClick={handleDelete}
                />
                <Button type="primary" label="Mark as paid" />
            </div>
        </div>
    );
};

export default StatusBar;
