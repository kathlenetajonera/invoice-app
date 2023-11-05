const express = require("express");
const router = express.Router();
const {
    getInvoices,
    addInvoice,
    getInvoiceByReferenceNumber,
    deleteInvoice,
    updateInvoice,
} = require("../controllers/InvoiceController");

router.get("/", getInvoices);
router.post("/", addInvoice);

router.get("/:referenceNumber", getInvoiceByReferenceNumber);
router.put("/:referenceNumber", updateInvoice);
router.delete("/:referenceNumber", deleteInvoice);

module.exports = router;
