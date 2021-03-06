import React from "react";
import styled from "styled-components/macro";

// type
import { PurchaseContainerProps } from "./type";

//components
import PageHeader from "../../../components/PageHeader";
import Layout from "../../../components/Layout";
import PurchaseInvoiceList from "./PurchaseInvoiceList";
import PurchaseInvoiceSupplier from "./PurchaseInvoiceSupplier";
import PurchaseInvoicePayment from "./PurchaseInvoicePayment";
import PageWrapper from "../../../components/PageWrapper";
import Button from "../../../components/Button";

const PurchaseInvoiceContainer = (props: PurchaseContainerProps) => {
  const {
    supplierName,
    invoiceNo,
    isIncludePPN,
    handleChangeInvoiceNo,
    handleChangeIsIncludePPN,
    handleChangeSupplierName,

    // payment
    paymentType,
    dueDate,
    purchaseDate,
    handleChangeDueDate,
    handleChangePaymentType,
    handleChangePurchaseDate,

    // list
    purchaseInvoiceItems,
    stampPrice,
    purchaseDiscount,
    setListPurchaseInvoice,
    setStampPrice,
    setPurchaseDiscount,
  } = props;

  return (
    <Layout>
      <PageWrapper>
        <PageHeader title={"Catat Faktur Pembelian"}>
          <div className="page-header__action-button">
            <div className="action-button">
              <Button title="Batal"></Button>
            </div>
            <div className="action-button">
              <Button title="Simpan Factur" inverse></Button>
            </div>
          </div>
        </PageHeader>
        <Container>
          <div className="container-row">
            <div className="container-row__column">
              <PurchaseInvoiceSupplier
                supplierName={supplierName}
                invoiceNo={invoiceNo}
                isIncludePPN={isIncludePPN}
                handleChangeIsIncludePPN={handleChangeIsIncludePPN}
                handleChangeInvoiceNo={handleChangeInvoiceNo}
                handleChangeSupplierName={handleChangeSupplierName}
              />
            </div>
            <div className="container-row__column">
              <PurchaseInvoicePayment
                paymentType={paymentType}
                dueDate={dueDate}
                purchaseDate={purchaseDate}
                handleChangeDueDate={handleChangeDueDate}
                handleChangePaymentType={handleChangePaymentType}
                handleChangePurchaseDate={handleChangePurchaseDate}
              />
            </div>
          </div>
          <div className="container-row">
            <PurchaseInvoiceList
              purchaseInvoiceItems={purchaseInvoiceItems}
              stampPrice={stampPrice}
              purchaseDiscount={purchaseDiscount}
              setListPurchaseInvoice={setListPurchaseInvoice}
              setStampPrice={setStampPrice}
              setPurchaseDiscount={setPurchaseDiscount}
              isIncludePPN={isIncludePPN}
            />
          </div>
        </Container>
      </PageWrapper>
    </Layout>
  );
};

const Container = styled.div`
  background: #f3f5f7;
  padding: 0px 32px 32px 32px;
  height: 100%;
  overflow: scroll;

  .container-row {
    display: flex;
    width: 100%;
  }

  .container-row__column {
    width: calc(50% - 10px);
  }

  .container-row:not(:first-child) {
    margin-top: 12px;
  }

  .container-row__column:not(:first-child) {
    margin-left: 20px;
  }
`;

export default PurchaseInvoiceContainer;
