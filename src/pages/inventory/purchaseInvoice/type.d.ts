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


export type PurchaseContainerProps = {
    supplierName: string;
    invoiceNo: string;
    isIncludePPN: boolean;
    handleChangeIsIncludePPN: (value: boolean) => void;
    handleChangeInvoiceNo: (value: string) => void;
    handleChangeSupplierName: (name: string) => void;

    // payment
    paymentType: PaymentType;
    purchaseDate: Date | null;
    dueDate: Date | null;
    handleChangePaymentType: (value: PaymentType) => void;
    handleChangePurchaseDate: (value: Date | null) => void;
    handleChangeDueDate: (value: Date | null) => void;
}

export type PurchaseInvoiceSupplierProps = Pick<PurchaseContainerProps, 'supplierName' | 'invoiceNo' | 'isIncludePPN' | 'handleChangeIsIncludePPN' | 'handleChangeInvoiceNo' | 'handleChangeSupplierName'>

export type PurchaseInvoicePaymentProps = Pick<PurchaseContainerProps, 'paymentType' | 'purchaseDate' | 'dueDate' | 'handleChangePaymentType' | 'handleChangePurchaseDate' | 'handleChangeDueDate'>