import React, { useMemo } from "react";
import styled from "styled-components/macro";

// type
import { PurchaseInvoicePaymentProps } from "./type";

// component
import Select from "../../../components/Select";
import Calendar from "../../../components/SingleDatePicker";
import InputWithLabel from "../../../components/InputWithLabel";

// style
import { BasicContainer } from "../../../styles/styles";

const PurchaseInvoicePayment = (props: PurchaseInvoicePaymentProps) => {
  const {
    paymentType,
    dueDate,
    purchaseDate,
    handleChangeDueDate,
    handleChangePaymentType,
    handleChangePurchaseDate,
  } = props;

  const paymentOptions = [
    { label: "Kredit", value: "credit" },
    { label: "Kas", value: "cash" },
  ];

  const getPaymentTypeValue = useMemo(() => {
    return paymentOptions.find((el) => el.value === paymentType);
  }, [paymentType, paymentOptions]);

  return (
    <Container>
      <InputWithLabel label={"Pembayaran"}>
        <div className="payment-type__select">
          <Select
            value={getPaymentTypeValue}
            options={paymentOptions}
            onChange={(option) => handleChangePaymentType(option.value)}
          />
        </div>
      </InputWithLabel>

      <div className="supplier__row">
        <div className="supplier__column">
          <InputWithLabel label="Tanggal Pembelian">
            <Calendar
              onChange={handleChangePurchaseDate}
              selectedDate={purchaseDate}
            />
          </InputWithLabel>
        </div>
        <div className="supplier__column">
          <InputWithLabel label="Jatuh tempo">
            <Calendar onChange={handleChangeDueDate} selectedDate={dueDate} />
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

  .payment-type__select {
    width: 100px;
  }
`;

export default PurchaseInvoicePayment;
