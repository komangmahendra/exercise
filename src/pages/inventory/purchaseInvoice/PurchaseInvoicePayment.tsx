import React from "react";
import styled from "styled-components/macro";

// component
import InputText from "../../../components/InputText";
import Calendar from "../../../components/SingleDatePicker";
import { InputWithLabelStyle, BasicContainer } from "../../../styles/styles";

const PurchaseInvoicePayment = () => {
  return (
    <Container>
      <InputWithLabel>
        <span className="label-title">
          Suplier<span className="label-title__tnc">*</span>
        </span>
        <InputText />
      </InputWithLabel>

      <div className="supplier__row">
        <div className="supplier__column">
          <InputWithLabel>
            <span className="label-title">
              Nomor Faktur<span className="label-title__tnc">*</span>
            </span>
            <Calendar />
          </InputWithLabel>
        </div>
        <div className="supplier__column">
          <InputWithLabel>
            <span className="label-title">Harga Termasuk PPN</span>
            <Calendar />
          </InputWithLabel>
        </div>
      </div>
    </Container>
  );
};

const Container = styled(BasicContainer)`
  background-color: #fff;
  width: 100%;

  .supplier__row {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr auto;
    margin-top: 20px;
  }

  .supplier__column {
  }

  .column-input__select {
    width: 100px;
  }
`;

const InputWithLabel = InputWithLabelStyle;

export default PurchaseInvoicePayment;
