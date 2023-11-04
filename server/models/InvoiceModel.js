const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: String,
    qty: Number,
    price: String,
    total: Number,
});

const invoiceSchema = new Schema(
    {
        referenceNumber: String,
        status: String,
        date: String,
        paymentDate: String,
        paymentTerms: String,
        projectDescription: String,
        billFrom: {
            streetAddress: String,
            city: String,
            postCode: String,
            country: String,
        },
        billTo: {
            clientName: String,
            clientEmail: String,
            streetAddress: String,
            city: String,
            postCode: String,
            country: String,
        },
        items: [itemSchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
