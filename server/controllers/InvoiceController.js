const Invoice = require("../models/InvoiceModel");

const getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.create(req.body);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getInvoiceByReferenceNumber = async (req, res) => {
    try {
        const refNumber = req.params.referenceNumber;
        const invoice = await Invoice.find({
            referenceNumber: refNumber,
        }).exec();

        res.status(200).json(invoice[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteInvoice = async (req, res) => {
    try {
        const refNumber = req.params.referenceNumber;
        const invoice = await Invoice.findOneAndDelete({
            referenceNumber: refNumber,
        });
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getInvoices,
    addInvoice,
    getInvoiceByReferenceNumber,
    deleteInvoice,
};
