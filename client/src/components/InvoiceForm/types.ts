export type InvoiceType = {
    _id?: string;
    referenceNumber?: string;
    status?: string;

    date: string;
    paymentDate: string;
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
    items: ItemType[];
};

export type ItemType = {
    _id?: string;
    name: string;
    qty: any;
    price: string;
    total: number;
};
