export type Unit = "pcs";

export type PaymentType = "cash" | "credit";

export type DiscountType = "percentage" | "idr";

export type Discount = { type: DiscountType; value: number };

export type PurchaseInvoiceItem = {
  goods: string;
  batch: string;
    ED: { month: number | null; year: number | null };
  price: number;
  qty: number;
  unit: Unit;
  discount: Discount;
};

export type  PurchaseInvoiceItemKeys = keyof PurchaseInvoiceItem

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

    // list 
    purchaseInvoiceItems: PurchaseInvoiceItem[];
    stampPrice: number;
    purchaseDiscount: Discount;
    setListPurchaseInvoice: (list: PurchaseInvoiceItem[]) => void;
    setStampPrice: (price: number) => void;
    setPurchaseDiscount: (val: Discount) => void;
}

export type PurchaseInvoiceSupplierProps = Pick<PurchaseContainerProps, 'supplierName' | 'invoiceNo' | 'isIncludePPN' | 'handleChangeIsIncludePPN' | 'handleChangeInvoiceNo' | 'handleChangeSupplierName'>

export type PurchaseInvoicePaymentProps = Pick<PurchaseContainerProps, 'paymentType' | 'purchaseDate' | 'dueDate' | 'handleChangePaymentType' | 'handleChangePurchaseDate' | 'handleChangeDueDate'>

export type PurchaseInvoiceListProps = Pick<PurchaseContainerProps, 'isIncludePPN' | 'purchaseInvoiceItems' | 'stampPrice' | 'purchaseDiscount' | 'setListPurchaseInvoice' | 'setStampPrice' | 'setPurchaseDiscount'>