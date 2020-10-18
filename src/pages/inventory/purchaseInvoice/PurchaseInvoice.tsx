import React, { useState } from "react";

// component
import PurchaseInvoiceContainer from "./PurchaseInvoiceContainer";

export type Unit = "pcs";

export type PaymentType = "cash" | "credit";

export type DiscountType = "percentage";

export type Discount = { type: DiscountType; value: number };

export type PurchaseInvoiceItem = {
  goods: string;
  batch: string;
  ED: { month: number; year: number };
  price: number;
  qty: number;
  unit: Unit;
  discount: Discount;
};

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
  const [purchangeDate, setPurchaseDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleDeleteItem = (index: number) => {};

  return (
    <PurchaseInvoiceContainer
      supplierName={supplierName}
      invoiceNo={invoiceNo}
      isIncludePPN={isIncludePPN}
      handleChangeIsIncludePPN={setIsIncludePPN}
      handleChangeInvoiceNo={setInvoiceNo}
      handleChangeSupplierName={setSupplierName}
    />
  );
};

export default PurchaseInvoice;
