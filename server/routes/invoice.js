const express = require("express");
const router = express.Router();
const {
    getInvoices,
    addInvoice,
    getInvoiceByReferenceNumber,
    deleteInvoice,
} = require("../controllers/InvoiceController");

router.get("/", getInvoices);
router.post("/", addInvoice);

router.get("/:referenceNumber", getInvoiceByReferenceNumber);
router.delete("/:referenceNumber", deleteInvoice);

module.exports = router;
