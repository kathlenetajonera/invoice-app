import { FieldArray, useField } from 'formik';
import { labelClassName } from '../../FormElements/TextField';
import { FieldProps } from '../../FormElements/types';
import InputItem from '../InputItem';
import { ItemType } from '../types';

const itemTemplate = {
    name: '',
    qty: '',
    price: '',
    total: '',
};

const ItemList = ({ name }: FieldProps) => {
    const [_, meta] = useField(name);

    return (
        <div className="mt-6">
            {meta.value.length > 0 && (
                <div className="grid grid-cols-4 gap-6 md:hidden">
                    <label className={labelClassName}>Item Name</label>
                    <label className={labelClassName}>Qty.</label>
                    <label className={labelClassName}>Price</label>
                    <label className={labelClassName}>Total</label>
                </div>
            )}

            <FieldArray
                name="items"
                render={(arrayHelpers) => (
                    <>
                        {meta.value.map((item: ItemType, index: number) => (
                            <InputItem
                                key={index}
                                index={index}
                                item={item}
                                handleDelete={() => {
                                    if (meta.value.length === 1) return;
                                    arrayHelpers.remove(index);
                                }}
                            />
                        ))}
                        <button
                            type="button"
                            className="w-full text-gray font-medium bg-light-bg p-4 rounded-full transition-[background] hover:bg-[#dfe3fa]"
                            onClick={() => arrayHelpers.push(itemTemplate)}
                        >
                            + Add New Item
                        </button>
                    </>
                )}
            />
        </div>
    );
};

export default ItemList;
