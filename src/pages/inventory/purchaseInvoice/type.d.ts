export type PurchaseContainerProps = {
    supplierName: string;
    invoiceNo: string;
    isIncludePPN: boolean;
    handleChangeIsIncludePPN: (value: boolean) => void;
    handleChangeInvoiceNo: (value: string) => void;
    handleChangeSupplierName: (name: string) => void;
}

export type PurchaseInvoiceSupplierProps = Pick<PurchaseContainerProps, 'supplierName' | 'invoiceNo' | 'isIncludePPN' | 'handleChangeIsIncludePPN' |'handleChangeInvoiceNo' | 'handleChangeSupplierName'>