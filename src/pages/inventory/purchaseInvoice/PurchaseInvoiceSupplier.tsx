import React, { useMemo } from "react";
import styled from "styled-components/macro";

// type
import { PurchaseInvoiceSupplierProps } from "./type";

// component
import InputText from "../../../components/InputText";
import Select from "../../../components/Select";
import InputWithLabel from "../../../components/InputWithLabel";

// styles
import { BasicContainer } from "../../../styles/styles";

const PurchaseInvoiceSupplier = (props: PurchaseInvoiceSupplierProps) => {
  const {
    supplierName,
    invoiceNo,
    isIncludePPN,
    handleChangeInvoiceNo,
    handleChangeIsIncludePPN,
    handleChangeSupplierName,
  } = props;

  const includePPNOotions = [
    { label: "Ya", value: true },
    { label: "Tidak", value: false },
  ];

  const getInclludePPNOptionValue = useMemo(() => {
    return includePPNOotions.find((el) => el.value === isIncludePPN);
  }, [isIncludePPN]);

  return (
    <Container>
      <InputWithLabel label={"supplier"} hasMarker>
        <InputText
          placeholder="Masukkan nama supplier"
          value={supplierName}
          onChange={(e: any) => handleChangeSupplierName(e.target.value)}
          textAlign="left"
        />
      </InputWithLabel>

      <div className="supplier__row">
        <div className="supplier__column">
          <InputWithLabel label={"Nomor Faktur"} hasMarker>
            <InputText
              placeholder="Masukkan nomor faktur"
              textAlign="left"
              value={invoiceNo}
              onChange={(e: any) => handleChangeInvoiceNo(e.target.value)}
            />
          </InputWithLabel>
        </div>
        <div className="supplier__column">
          <InputWithLabel label={"Harga termasuk PPN"}>
            <div className="column-input__select">
              <Select
                options={includePPNOotions}
                value={getInclludePPNOptionValue}
              />
            </div>
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

export default PurchaseInvoiceSupplier;
