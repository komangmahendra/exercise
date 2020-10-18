import React from "react";
import styled from "styled-components/macro";

//components
import PageHeader from "../../../components/PageHeader";
import Layout from "../../../components/Layout";
import PurchaseInvoiceList from "./PurchaseInvoiceList";
import PurchaseInvoiceSupplier from "./PurchaseInvoiceSupplier";
import PurchaseInvoicePayment from "./PurchaseInvoicePayment";
import PageWrapper from "../../../components/PageWrapper";
import Button from "../../../components/Button";

// styles

const PurchaseInvoiceContainer = () => {
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
              <PurchaseInvoiceSupplier />
            </div>
            <div className="container-row__column">
              <PurchaseInvoicePayment />
            </div>
          </div>
          <div className="container-row">
            <PurchaseInvoiceList />
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
