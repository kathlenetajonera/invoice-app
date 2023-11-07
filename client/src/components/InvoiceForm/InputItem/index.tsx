import { useEffect } from 'react';
import { Field, useField } from 'formik';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { inputClassName, labelClassName } from '../../FormElements/TextField';
import { formatCurrency, sanitizePrice } from '../../../utils/functions';
import Delete from '../../Icons/Delete';
import { ItemType } from '../types';

type Props = {
    index: number;
    item: ItemType;
    handleDelete: () => void;
};

const numberMask = createNumberMask({
    prefix: '₱',
    allowDecimal: true,
});

const InputItem = ({ index, item, handleDelete }: Props) => {
    const [_, meta, helpers] = useField(`items.${index}`);
    const { setValue } = helpers;
    const [priceField] = useField(`items.${index}.price`);
    const price = item?.price ? sanitizePrice(item?.price) : 0;
    const total = item?.qty * price;

    useEffect(() => {
        setValue({ ...item, total });
    }, [total]);

    return (
        <div className="grid grid-cols-4 gap-6 items-center mb-3 md:grid-cols-3 md:gap-3">
            <div className="md:col-span-3">
                <label className={`${labelClassName} hidden md:block`}>
                    Item Name
                </label>
                <Field
                    name={`items.${index}.name`}
                    className={`${inputClassName} ${
                        meta.touched && meta.error ? 'border-red' : ''
                    }`}
                />
            </div>

            <div>
                <label className={`${labelClassName} hidden md:block`}>
                    Qty.
                </label>
                <Field
                    type="number"
                    name={`items.${index}.qty`}
                    className={`${inputClassName} ${
                        meta.touched && meta.error ? 'border-red' : ''
                    }`}
                    min={1}
                />
            </div>

            <div>
                <label className={`${labelClassName} hidden md:block`}>
                    Price
                </label>
                <MaskedInput
                    mask={numberMask}
                    className={`${inputClassName} ${
                        meta.touched && meta.error ? 'border-red' : ''
                    }`}
                    {...priceField}
                />
            </div>

            <div>
                <label className={`${labelClassName} hidden md:block`}>
                    Total
                </label>
                <div className="flex items-center justify-between h-12 mt-1">
                    <input
                        type="text"
                        disabled
                        value={formatCurrency(total)}
                        className="w-full bg-transparent text-black font-bold pr-4"
                    />
                    <Delete onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
};

export default InputItem;
