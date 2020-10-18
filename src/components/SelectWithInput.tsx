import React from "react";
import Select from "react-select";
import styled from "styled-components/macro";

// assets
import ChevronIcon from "../assets/icons/chevron.svg";

export type SelectWithInputComponentType = {
  inputPlaceholder?: string;
  selectOptions?: { label: string; value: string }[];
  inputValue?: number | string;
  selectValue?: { label: string; value: string };
  selectOnChange?: (value: { label: string; value: any }) => void;
  inputOnChange?: (value: string) => void;
};

const SelectWithInputComponent = (props: SelectWithInputComponentType) => {
  const {
    inputPlaceholder,
    selectOptions,
    inputValue,
    selectValue,
    selectOnChange,
    inputOnChange,
  } = props;

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      outline: "none",
      color: "#3A4F62",
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
        options={selectOptions || []}
        components={defaultComponents}
        styles={customStyles}
        value={selectValue}
        onChange={(option: any) => selectOnChange!(option.value)}
      />
      <div className="select-with-input__divider" />
      <input
        className="select-with-input__text-input"
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={(e) => inputOnChange!(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: solid 2px rgba(58, 79, 98, 0.2);
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

  :hover {
    border-color: #13c2cd;
    border-width: 2px;
  }
`;

const ArrowContainer = styled.div`
  padding: 0px 15px 0px 10px;
  > img {
    transform: rotate(90deg);
  }
`;

export default SelectWithInputComponent;
