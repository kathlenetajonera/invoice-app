import { ErrorMessage, Field, useField } from 'formik';
import { FieldProps } from '../types';

export const inputClassName =
    'text-black text-base font-medium outline-none border-[1px] border-input h-12 rounded-md w-full px-4 mt-1 transition-[border] hover:border-violet focus:border-violet dark:bg-dark-card dark:border-dark-card dark:hover:border-violet dark:focus:border-violet dark:text-white';
export const labelClassName = 'text-gray font-light dark:text-white';

const TextField = ({ name, label }: FieldProps) => {
    const [_, meta] = useField(name);

    return (
        <div className="mb-6 md:mb-5">
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
                        meta.touched && meta.error
                            ? 'border-red dark:border-red'
                            : ''
                    }`}
                />
            </label>
        </div>
    );
};

export default TextField;
