import { ErrorMessage, Field, useField } from 'formik';
import { FieldProps } from '../types';

export const inputClassName =
    'text-black text-base font-medium outline-none border-[1px] border-input h-12 rounded-md w-full px-4 mt-1 transition-[border] hover:border-violet focus:border-violet';
export const labelClassName = 'text-gray font-light';

const TextField = ({ name, label }: FieldProps) => {
    const [_, meta] = useField(name);

    return (
        <div className="mb-6">
            <label className={labelClassName}>
                <div className="flex justify-between items-center">
                    {label}
                    <ErrorMessage
                        name={name}
                        component="span"
                        className="text-red text-sm"
                    />
                </div>

                <Field
                    name={name}
                    className={`${inputClassName} ${
                        meta.touched && meta.error ? 'border-red' : ''
                    }`}
                />
            </label>
        </div>
    );
};

export default TextField;
