import * as Yup from 'yup';

export const initialValues = {
    date: '',
    paymentDate: '',
    paymentTerms: '',
    projectDescription: '',
    billFrom: {
        streetAddress: '',
        city: '',
        postCode: '',
        country: '',
    },
    billTo: {
        clientName: '',
        clientEmail: '',
        streetAddress: '',
        city: '',
        postCode: '',
        country: '',
    },
    items: [
        {
            name: '',
            qty: '',
            price: '',
            total: 0,
        },
    ],
};

export const validationSchema = Yup.object().shape({
    date: Yup.string().required('Required'),
    paymentTerms: Yup.string().required('Required'),
    projectDescription: Yup.string().required('Required'),
    billFrom: Yup.object({
        streetAddress: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postCode: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
    }),
    billTo: Yup.object({
        clientName: Yup.string().required('Required'),
        clientEmail: Yup.string().email('Invalid email').required('Required'),
        streetAddress: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postCode: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
    }),
    items: Yup.array(
        Yup.object({
            name: Yup.string().required(''),
            qty: Yup.number().required(''),
            price: Yup.string().required(''),
            total: Yup.number().required(''),
        })
    ),
});

export const paymentTerms = [
    {
        value: 'net_1_day',
        label: 'Net 1 Day',
    },
    {
        value: 'net_7_days',
        label: 'Net 7 Days',
    },
    {
        value: 'net_14_days',
        label: 'Net 14 Days',
    },
    {
        value: 'net_21_days',
        label: 'Net 21 Days',
    },
];
