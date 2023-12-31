import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { ErrorMessage, useField } from 'formik';
import { FieldProps } from '../types';
import { inputClassName, labelClassName } from '../TextField';

const DateField = ({ name, label }: FieldProps) => {
    const [_, meta, helpers] = useField(name);
    const { setValue } = helpers;

    const onChange = (date: any) => {
        const formattedValue = dayjs(date).format('MM/DD/YYYY');
        setValue(formattedValue);
    };

    const CustomInput = () => (
        <div
            className={`${inputClassName} ${
                meta.touched && meta.error ? 'border-red' : ''
            } pt-1 flex items-center cursor-pointer`}
        >
            {meta.value}
        </div>
    );

    const CustomIcon = () => (
        <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#7E88C3] top-1/2 -translate-y-1/2 right-2"
        >
            <path
                d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
                fillRule="nonzero"
                opacity=".5"
            />
        </svg>
    );

    return (
        <label className={`${labelClassName} md:mb-3.5`}>
            <div className="flex justify-between items-center">
                {label}
                <ErrorMessage
                    name={name}
                    component="span"
                    className="text-red text-sm"
                />
            </div>
            <DatePicker
                showIcon
                icon={CustomIcon()}
                customInput={CustomInput()}
                wrapperClassName="w-full"
                onChange={onChange}
            />
        </label>
    );
};

export default DateField;
