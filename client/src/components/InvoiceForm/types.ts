export type InvoiceType = {
    date: string;
    paymentTerms: string;
    projectDescription: string;
    billFrom: {
        streetAddress: string;
        city: string;
        postCode: string;
        country: string;
    };
    billTo: {
        clientName: string;
        clientEmail: string;
        streetAddress: string;
        city: string;
        postCode: string;
        country: string;
    };
    items: {
        name: string;
        qty: string | number;
        price: string;
        total: string | number;
    }[];
};

export type ItemType = {
    name: string;
    qty: number;
    price: string;
    total: number;
};
