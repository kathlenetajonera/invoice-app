import { useEffect } from 'react';
import { Field, useField } from 'formik';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { inputClassName } from '../../FormElements/TextField';
import { formatCurrency, sanitizePrice } from '../../../utils/functions';
import Delete from '../../Icons/Delete';
import { ItemType } from '../types';

type Props = {
    index: number;
    item: ItemType;
};

const numberMask = createNumberMask({
    prefix: '₱',
    allowDecimal: true,
});

const InputItem = ({ index, item }: Props) => {
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
            <Field
                name={`items.${index}.name`}
                className={`${inputClassName} ${
                    meta.touched && meta.error ? 'border-red' : ''
                } md:col-span-3`}
            />
            <Field
                type="number"
                name={`items.${index}.qty`}
                className={`${inputClassName} ${
                    meta.touched && meta.error ? 'border-red' : ''
                }`}
                min={1}
            />
            <MaskedInput
                mask={numberMask}
                className={`${inputClassName} ${
                    meta.touched && meta.error ? 'border-red' : ''
                }`}
                {...priceField}
            />

            <div className="flex items-start justify-between">
                <h4 className="text-black font-bold">
                    {formatCurrency(total)}
                </h4>
                <Delete />
            </div>
        </div>
    );
};

export default InputItem;
