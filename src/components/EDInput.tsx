import React from "react";
import styled from "styled-components/macro";

export type EDInputProps = {
  monthValue?: number;
  onChangeMonth?: (value: number) => void;
  yearValue?: number;
  onChangeYear?: (value: number) => void;
};

const EDInput = (props: EDInputProps) => {
  const { monthValue, onChangeMonth, onChangeYear, yearValue } = props;

  const handleChangeMonth = (e: any) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    if (value < 0 || value > 12) {
      return;
    }

    onChangeMonth!(value);
  };

  const handleChangeYear = (e: any) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    if (value < 0 || value > 9999) {
      return;
    }

    onChangeYear!(value);
  };

  return (
    <Container>
      <input
        placeholder="MM"
        onChange={handleChangeMonth}
        value={monthValue}
      ></input>
      <div className="divider" />
      <input
        placeholder="YY"
        onChange={handleChangeYear}
        value={yearValue}
      ></input>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 2px solid rgba(58, 79, 98, 0.2);
  height: 38px;
  border-radius: 6px;

  .divider {
    height: 100%;
    width: 3px;
    background-color: rgba(58, 79, 98, 0.2);
  }

  input {
    width: 100%;
    text-align: center;
    outline: none;
    border: none;

    font-size: 14px;
    line-height: 24px;
    color: #3a4f62;
  }
`;

export default EDInput;
