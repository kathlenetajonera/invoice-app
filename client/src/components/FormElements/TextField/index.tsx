import { ErrorMessage, Field } from 'formik';

export const inputClassName =
    'text-black text-base font-medium outline-none border-[1px] border-input h-12 rounded-md w-full px-4 mt-1 transition-[border] hover:border-violet focus:border-violet';
export const labelClassName = 'text-gray font-light';

const TextField = () => {
    return (
        <div className="mb-6">
            <label className={labelClassName}>
                Street Address
                <Field className={inputClassName} name="street_address" />
                <ErrorMessage name="street_address" component="span" />
            </label>
        </div>
    );
};

export default TextField;
