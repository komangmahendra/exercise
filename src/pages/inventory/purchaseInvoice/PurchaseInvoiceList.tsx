import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components/macro";

// type
import { PurchaseInvoiceListProps, PurchaseInvoiceItem } from "./type";

// components
import InputText from "../../../components/InputText";
import Select from "../../../components/Select";
import SelectWithInput from "../../../components/SelectWithInput";
import EDInput from "../../../components/EDInput";

// assets
import TrashIcon from "../../../assets/icons/trash.svg";

const StockInvoice = (props: PurchaseInvoiceListProps) => {
  const {
    stampPrice,
    purchaseInvoiceItems,
    purchaseDiscount,
    isIncludePPN,
    setListPurchaseInvoice,
    setPurchaseDiscount,
    setStampPrice,
  } = props;

  const discountOptions = [
    { label: "%", value: "percentage" },
    { label: "IDR", value: "idr" },
  ];

  const unitOptions = [{ label: "Pcs", value: "pcs" }];

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

  const validateNewRow = (lastRow: PurchaseInvoiceItem) => {
    if (
      lastRow.ED.month &&
      lastRow.ED.year &&
      lastRow.goods &&
      lastRow.batch &&
      lastRow.price &&
      lastRow.qty
    ) {
      return true;
    }

    return false;
  };

  const handleChangeItemValue = (index: number, value: any) => {
    const list = purchaseInvoiceItems.slice();

    list.splice(index, 1, value);

    const lastRow = list[list.length - 1];

    if (validateNewRow(lastRow) && list.length < 25) {
      list.push({
        goods: "",
        batch: "",
        ED: { month: null, year: null },
        price: 0,
        qty: 0,
        unit: "pcs",
        discount: { type: "percentage", value: 0 },
      });
    }

    setListPurchaseInvoice(list);
  };

  const calculateSubtotal = useCallback(
    (item) => {
      let totalDiscount = 0;
      const total = item.qty * item.price;

      if (item.discount?.value) {
        switch (item.discount.type) {
          case "percentage":
            totalDiscount = (item.discount.value / 100) * total;
            break;
          case "idr":
            totalDiscount = item.discount.value;
            break;
          default:
            totalDiscount = (item.discount.value / 100) * total;
            break;
        }
      }

      if (total - totalDiscount < 0) {
        return 0;
      }

      return total - totalDiscount;
    },
    [purchaseInvoiceItems]
  );

  const calculateTotal = useMemo(() => {
    let total = 0;

    purchaseInvoiceItems.forEach((item) => {
      total += calculateSubtotal(item);
    });

    return total;
  }, [purchaseInvoiceItems]);

  const handleDeleteRow = (index: number) => {
    const list = purchaseInvoiceItems.slice();

    if (list.length > 1) {
      list.splice(index, 1);
      setListPurchaseInvoice(list);
    }
  };

  const StockInvoiceListItem = useCallback(
    (item: PurchaseInvoiceItem, index: number) => {
      const totalRow = calculateSubtotal(item);

      return (
        <Row key={`purchase-invoice-item-${index}`}>
          <div className={`stock-list-column__goods column`}>
            <InputText
              placeholder="Nama barang"
              value={item.goods}
              textAlign="left"
              onChange={(e: any) => {
                const newItem = item;
                newItem.goods = e.target.value;
                handleChangeItemValue(index, newItem);
              }}
            />
          </div>
          <div className={`stock-list-column__batch column`}>
            <InputText
              placeholder="Batch"
              value={item.batch}
              textAlign="left"
              onChange={(e: any) => {
                const newItem = item;
                newItem.batch = e.target.value;
                handleChangeItemValue(index, newItem);
              }}
            />
          </div>
          <div className={`stock-list-column__ed column`}>
            <EDInput
              onChangeMonth={(val) => {
                const newItem = item;
                newItem.ED.month = val;
                handleChangeItemValue(index, newItem);
              }}
              yearValue={item.ED.year || undefined}
              onChangeYear={(val) => {
                const newItem = item;
                newItem.ED.year = val;
                handleChangeItemValue(index, newItem);
              }}
              monthValue={item.ED.month || undefined}
            />
          </div>
          <div className={`stock-list-column__price column`}>
            <InputText
              label={"IDR"}
              value={item.price || undefined}
              placeholder="0"
              onChange={(e: any) => {
                const newItem = item;
                newItem.price = e.target.value;
                handleChangeItemValue(index, newItem);
              }}
            />
          </div>
          <div className={`stock-list-column__qty column`}>
            <InputText
              value={item.qty || undefined}
              placeholder="0"
              onChange={(e: any) => {
                const newItem = item;
                newItem.qty = e.target.value;
                handleChangeItemValue(index, newItem);
              }}
            />
          </div>
          <div className={`stock-list-column__unit column`}>
            <Select
              onChange={(option) => {
                const newItem = item;
                newItem.unit = option.value;
                handleChangeItemValue(index, newItem);
              }}
              options={unitOptions}
              value={unitOptions.find((el) => el.value === item.unit)}
            />
          </div>
          <div className={`stock-list-column__discount column`}>
            <SelectWithInput
              selectOptions={discountOptions}
              selectValue={discountOptions.find(
                (el) => el.value === item.discount.type
              )}
              selectOnChange={(option: any) => {
                const newItem = item;
                newItem.discount.type = option;
                handleChangeItemValue(index, newItem);
              }}
              inputOnChange={(val: any) => {
                const newItem = item;
                newItem.discount.value = val;
                handleChangeItemValue(index, newItem);
              }}
              inputValue={item.discount.value || undefined}
              inputPlaceholder="0"
            />
          </div>
          <div className={`stock-list-column__subtotal column`}>
            <div className="column-detail">
              <div className="currency">IDR</div>
              <div className="total">{totalRow}</div>
            </div>
          </div>
          <div className={`stock-list-column__action column`}>
            <img
              src={TrashIcon}
              alt="Delete item"
              onClick={() => handleDeleteRow(index)}
            />
          </div>
        </Row>
      );
    },
    [purchaseInvoiceItems]
  );

  const renderList = () => {
    return purchaseInvoiceItems.map((item, index) =>
      StockInvoiceListItem(item, index)
    );
  };

  const calculateTotalPayment = useMemo(() => {
    let totalDiscount = 0;
    let PPN = 0;

    if (purchaseDiscount.value) {
      switch (purchaseDiscount.type) {
        case "percentage":
          totalDiscount = (purchaseDiscount.value / 100) * calculateTotal;
          break;
        case "idr":
          totalDiscount = purchaseDiscount.value;
          break;
        default:
          totalDiscount = (purchaseDiscount.value / 100) * calculateTotal;
          break;
      }
    }

    if (!isIncludePPN) {
      PPN = calculateTotal * 0.1;
    }

    let tempTotal = Number(calculateTotal) + Number(stampPrice) + Number(PPN);

    if (Number(tempTotal) - Number(totalDiscount) < 0) {
      return 0;
    }

    return Number(tempTotal) - Number(totalDiscount);
  }, [calculateTotal, stampPrice, purchaseDiscount, isIncludePPN]);

  const calculatePPN = useMemo(() => {
    if (isIncludePPN) {
      return 0;
    }

    return calculateTotal * 0.1;
  }, [calculateTotal, isIncludePPN]);

  return (
    <Container>
      <div className="stock-list__header">
        <Row>{renderListHeader}</Row>
      </div>
      <div className="stock-list__body">{renderList()}</div>
      <TotalContainer>
        <div className="purchase-invoice-sum__column-info">
          <span className="info__total-list">
            {purchaseInvoiceItems.length} dari maks.25 barang per faktur
          </span>
        </div>

        <div className="purchase-invoice-sum__column">
          <div className="summary__row">
            <div className="column-title">Subtotal</div>
            <div className="column-detail">
              <div className="currency">IDR</div>
              <div className="total">{calculateTotal}</div>
            </div>
          </div>
          <div className="summary__row">
            <div className="column-title">Diskon pembelian</div>
            <div className="column-detail">
              <div className="input-column">
                <SelectWithInput
                  selectOptions={discountOptions}
                  selectValue={discountOptions.find(
                    (el) => el.value === purchaseDiscount.type
                  )}
                  selectOnChange={(option: any) => {
                    const newItem = purchaseDiscount;
                    newItem.type = option;
                    setPurchaseDiscount(newItem);
                  }}
                  inputOnChange={(val: any) => {
                    const a = purchaseDiscount;
                    a.value = val;
                    setPurchaseDiscount(a);
                  }}
                  inputValue={purchaseDiscount.value || undefined}
                  inputPlaceholder="0"
                />
              </div>
            </div>
          </div>

          {!isIncludePPN ? (
            <>
              <div className="summary__divider"></div>

              <div className="summary__row">
                <div className="column-title">DPP</div>
                <div className="column-detail">
                  <div className="currency">IDR</div>
                  <div className="total">0</div>
                </div>
              </div>
              <div className="summary__row">
                <div className="column-title">PPN</div>
                <div className="column-detail">
                  <div className="percentage">10%</div>
                  <div className="currency">IDR</div>
                  <div className="total">{calculatePPN}</div>
                </div>
              </div>
            </>
          ) : null}

          <div className="summary__divider"></div>

          <div className="summary__row">
            <div className="column-title">Biaya Materai</div>
            <div className="column-detail">
              <div className="input-column">
                <InputText
                  label={"IDR"}
                  value={stampPrice || undefined}
                  placeholder="0"
                  onChange={(e: any) => {
                    const val = e.target.value;
                    setStampPrice(val);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="summary__divider"></div>

          <div className="summary__row">
            <div className="column-title">Total tagihan</div>
            <div className="column-detail">
              <div className="currency">IDR</div>
              <div className="total">{calculateTotalPayment}</div>
            </div>
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

  .column-detail {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    text-align: right;

    font-size: 14px;
    line-height: 24px;

    > .currency {
    }

    > .total {
      min-width: 90px;
    }
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
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        text-align: right;
      }

      .column-detail {
        display: flex;
        justify-content: flex-end;
        padding-right: 30px;
        text-align: right;

        font-size: 14px;
        line-height: 24px;

        > .input-column {
          width: 150px;
        }

        > .percentage {
        }

        > .currency {
          margin-left: 50px;
        }

        > .total {
          min-width: 90px;
        }
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
      100% - 112px - 90px - 118px - 42px - 130px - 138px - 120px - 40px - 64px
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
    text-align: right;
    width: 120px;
    min-width: 120px;
  }

  .stock-list-column__action {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

export default StockInvoice;
