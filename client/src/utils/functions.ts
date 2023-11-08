import dayjs from 'dayjs';

export const formatCurrency = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
    });

    return formatter.format(amount);
};

export const formatToDateString = (date: string) => {
    return dayjs(date).format('DD MMM YYYY');
};

export const sanitizePrice = (val: string | number) => {
    return typeof val === 'number'
        ? val
        : parseFloat(val.replace(/[₱,]/g, '')).toFixed(2);
};
