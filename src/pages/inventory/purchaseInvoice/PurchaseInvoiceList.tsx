import React, { useMemo } from "react";
import styled from "styled-components/macro";

// components
import InputText from "../../../components/InputText";
import Select from "../../../components/Select";
import SelectWithInput from "../../../components/SelectWithInput";
import EDInput from "../../../components/EDInput";

// assets
import TrashIcon from "../../../assets/icons/trash.svg";

const StockInvoice = () => {
  const headerTitle = [
    { label: "Barang", css: "goods" },
    { label: "Batch", css: "batch" },
    { label: "ED", css: "ed" },
    { label: "Harga @", css: "price" },
    { label: "Qty", css: "qty" },
    { label: "Satuan", css: "unit" },
    { label: "Diskon", css: "discount" },
    { label: "Subtotal", css: "subtotal" },
    { label: "", css: "action" },
  ];

  const renderListHeader = useMemo(() => {
    return headerTitle.map((e, index) => {
      return (
        <div
          className={`stock-list-column__${e.css} stock-list-column__header column`}
          key={`header-title-${index}`}
        >
          {e.label}
        </div>
      );
    });
  }, []);

  const StockInvoiceListItem = useMemo(() => {
    return (
      <Row>
        <div className={`stock-list-column__goods column`}>
          <InputText />
        </div>
        <div className={`stock-list-column__batch column`}>
          <InputText />
        </div>
        <div className={`stock-list-column__ed column`}>
          <EDInput />
        </div>
        <div className={`stock-list-column__price column`}>
          <InputText label={"IDR"} />
        </div>
        <div className={`stock-list-column__qty column`}>
          <InputText />
        </div>
        <div className={`stock-list-column__unit column`}>
          {/* <Select /> */}
        </div>
        <div className={`stock-list-column__discount column`}>
          <SelectWithInput />
        </div>
        <div className={`stock-list-column__subtotal column`}>
          <InputText />
        </div>
        <div className={`stock-list-column__action column`}>
          <img src={TrashIcon} alt="Delete item" />
        </div>
      </Row>
    );
  }, []);

  const renderList = () => {
    const lists = [];
    for (let i = 0; i < 3; i++) {
      lists.push(StockInvoiceListItem);
    }

    return lists;
  };

  return (
    <Container>
      <div className="stock-list__header">
        <Row>{renderListHeader}</Row>
      </div>
      <div className="stock-list__body">{renderList()}</div>
      <TotalContainer>
        <div className="purchase-invoice-sum__column-info">
          <span className="info__total-list">
            0 dari maks.25 barang per faktur
          </span>
        </div>

        <div className="purchase-invoice-sum__column">
          <div className="summary__row">
            <div className="column-title">Subtotal</div>
            <div className="column-detail">IDR 0</div>
          </div>
          <div className="summary__row">
            <div className="column-title">Diskon pembelian</div>
            <div className="column-detail">IDR 0</div>
          </div>

          <div className="summary__divider"></div>

          <div className="summary__row">
            <div className="column-title">Subtotal</div>
            <div className="column-detail">IDR 0</div>
          </div>
          <div className="summary__row">
            <div className="column-title">Diskon pembelian</div>
            <div className="column-detail">IDR 0</div>
          </div>

          <div className="summary__divider"></div>

          <div className="summary__row">
            <div className="column-title">Diskon pembelian</div>
            <div className="column-detail">IDR 0</div>
          </div>

          <div className="summary__divider"></div>

          <div className="summary__row">
            <div className="column-title">Diskon pembelian</div>
            <div className="column-detail">IDR 0</div>
          </div>
        </div>
      </TotalContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid rgba(58, 79, 98, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(58, 79, 98, 0.2);
  border-radius: 4px;
  width: 100%;
  background-color: #fff;

  > .stock-list__header {
  }
`;

const TotalContainer = styled.div`
  display: flex;

  .purchase-invoice-sum__column-info {
    padding: 12px 20px;
    width: 60%;

    .info__total-list {
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
    }
  }

  .purchase-invoice-sum__column {
    width: 40%;
    padding: 12px 0px;

    .summary__divider {
      width: 100%;
      border: 1px solid rgba(58, 79, 98, 0.2);
      margin: 10px 0px;
    }

    .summary__row {
      display: grid;
      grid-template-columns: 1fr 2fr;

      .column-title {
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        text-align: right;
      }

      .column-detail {
        padding-right: 30px;
        text-align: right;
      }
    }

    .summary__row:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  color: #3a4f62;

  padding: 20px 18px;
  border-bottom: 1px solid rgba(58, 79, 98, 0.2);

  .column:not(:first-child) {
    margin-left: 8px;
  }

  .stock-list-column__header {
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
  }

  .stock-list-column__goods {
    width: calc(
      100% - 112px - 90px - 118px - 42px - 130px - 138px - 120px - 22px - 64px
    );
    min-width: 155px;
  }

  .stock-list-column__batch {
    width: 112px;
    min-width: 112px;
  }

  .stock-list-column__ed {
    width: 90px;
    min-width: 90px;
  }

  .stock-list-column__price {
    width: 118px;
    min-width: 118px;
  }

  .stock-list-column__qty {
    width: 42px;
    min-width: 42px;
  }

  .stock-list-column__unit {
    width: 130px;
    min-width: 130px;
  }

  .stock-list-column__discount {
    width: 138px;
    min-width: 138px;
  }

  .stock-list-column__subtotal {
    width: 120px;
    min-width: 120px;
  }

  .stock-list-column__action {
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

export default StockInvoice;
