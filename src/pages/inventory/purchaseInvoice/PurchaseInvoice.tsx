import React, { useState } from "react";

// type
import { Discount, PaymentType, PurchaseInvoiceItem } from "./type";

// component
import PurchaseInvoiceContainer from "./PurchaseInvoiceContainer";

const PurchaseInvoice = () => {
  const [listPurchaseInvoice, setListPurchaseInvoice] = useState<
    PurchaseInvoiceItem[]
  >([]);

  const [stampPrice, setStampPrice] = useState(0);
  const [purchaseDiscount, setPurchaseDiscount] = useState<Discount>({
    type: "percentage",
    value: 0,
  });

  // SUPPLIER
  const [supplierName, setSupplierName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [isIncludePPN, setIsIncludePPN] = useState<boolean>(false);

  // PAYMENT
  const [paymentType, setPaymenetType] = useState<PaymentType>("credit");
  const [purchaseDate, setPurchaseDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());

  const handleDeleteItem = (index: number) => {};

  return (
    <PurchaseInvoiceContainer
      supplierName={supplierName}
      invoiceNo={invoiceNo}
      isIncludePPN={isIncludePPN}
      handleChangeIsIncludePPN={setIsIncludePPN}
      handleChangeInvoiceNo={setInvoiceNo}
      handleChangeSupplierName={setSupplierName}
      //  payment
      paymentType={paymentType}
      purchaseDate={purchaseDate}
      dueDate={dueDate}
      handleChangePaymentType={setPaymenetType}
      handleChangePurchaseDate={setPurchaseDate}
      handleChangeDueDate={setDueDate}
    />
  );
};

export default PurchaseInvoice;
