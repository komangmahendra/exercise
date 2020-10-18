import React from "react";
import Select from "react-select";
import styled from "styled-components/macro";

// assets
import ChevronIcon from "../assets/icons/chevron.svg";

const SelectComponent = () => {
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      "&:hover": { borderColor: "gray" },
      border: "1px solid lightgray",
      boxShadow: "none !important",
      outline: "none",
      height: "40px",
      // You can also use state.isFocused to conditionally style based on the focus state
    }),
  };

  return (
    <Container>
      <Select
        options={[{ value: "hehe", label: "hehe" }]}
        components={{
          DropdownIndicator: () => (
            <ArrowContainer>
              <img src={ChevronIcon} />
            </ArrowContainer>
          ),
          IndicatorSeparator: () => null,
        }}
        value={{ value: "hehe", label: "hehe" }}
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
