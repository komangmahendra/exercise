import React from "react";
import Select from "react-select";
import styled from "styled-components/macro";

// assets
import ChevronIcon from "../assets/icons/chevron.svg";

const SelectComponent = () => {
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      outline: "none",
    }),
  };

  const defaultComponents = {
    DropdownIndicator: () => (
      <ArrowContainer>
        <img src={ChevronIcon} width={12} height={12} />
      </ArrowContainer>
    ),
    IndicatorSeparator: () => null,
  };

  return (
    <Container>
      <Select
        options={[{ value: "USD", label: "$" }]}
        components={defaultComponents}
        styles={customStyles}
        value={{ value: "USD", label: "$" }}
      />
      <div className="select-with-input__divider" />
      <input className="select-with-input__text-input" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: solid 1px lightgray;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  line-height: 24px;
  height: 38px;
  background-color: #fff;

  > .select-with-input__divider {
    width: 1px;
    background-color: #13c2cd;
  }

  > .select-with-input__text-input {
    border: none;
    outline: none;
    max-width: 50px;
    padding: 0px 10px;
    color: #3a4f62;
  }
`;

const ArrowContainer = styled.div`
  padding: 0px 15px 0px 10px;
  > img {
    transform: rotate(90deg);
  }
`;

export default SelectComponent;
