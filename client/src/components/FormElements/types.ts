export type FieldProps = {
    name: string;
    label?: string;
};

export type SelectFieldProps = {
    name: string;
    label: string;
    options: {
        value: string;
        label: string;
    }[];
};
