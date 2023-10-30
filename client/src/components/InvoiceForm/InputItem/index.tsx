import Delete from '../../Icons/Delete';
import { inputClassName } from '../../FormElements/TextField';

const InputItem = () => {
    return (
        <div className="grid grid-cols-4 gap-6 items-center mb-3">
            <input type="text" className={inputClassName} />
            <input type="number" className={inputClassName} />
            <input type="text" className={inputClassName} />

            <div className="flex items-start justify-between">
                <h4 className="text-black font-bold">P 100.00</h4>
                <Delete />
            </div>
        </div>
    );
};

export default InputItem;
