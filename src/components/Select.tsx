import React from "react";
import Select from "react-select";
import styled from "styled-components/macro";

// assets
import ChevronIcon from "../assets/icons/chevron.svg";

export type SelectComponentProps = {
  value?: any;
  options?: { label: string; value: any }[];
  onChange: (value: { label: string; value: any }) => void;
};

const SelectComponent = (props: SelectComponentProps) => {
  const { options, value, onChange } = props;

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      "&:hover": { borderColor: "#3A4F62" },
      border: "1px solid lightgray",
      boxShadow: "none",
      outline: "none",
      height: "40px",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#3A4F62",
    }),
  };

  return (
    <Container>
      <Select
        options={options || []}
        components={{
          DropdownIndicator: () => (
            <ArrowContainer>
              <img src={ChevronIcon} />
            </ArrowContainer>
          ),
          IndicatorSeparator: () => null,
        }}
        onChange={(value) => onChange(value!)}
        value={value}
        styles={customStyles}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 42px;
`;

const ArrowContainer = styled.div`
  padding: 0px 15px 0px 10px;
  > img {
    transform: rotate(90deg);
  }
`;

export default SelectComponent;
