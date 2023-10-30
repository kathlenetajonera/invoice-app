import InputItem from '../InputItem';
import { labelClassName } from '../../FormElements/TextField';

const ItemList = () => {
    return (
        <div className="mt-6">
            <div className="grid grid-cols-4 gap-6">
                <p className={labelClassName}>Item Name</p>
                <p className={labelClassName}>Qty.</p>
                <p className={labelClassName}>Price</p>
                <p className={labelClassName}>Total</p>
            </div>

            <InputItem />
            <InputItem />

            <button className="w-full text-gray font-medium bg-light-bg p-4 rounded-full transition-[background] hover:bg-[#dfe3fa]">
                + Add New Item
            </button>
        </div>
    );
};

export default ItemList;
