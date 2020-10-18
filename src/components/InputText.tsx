import React from "react";
import styled from "styled-components/macro";

type InputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const InputText = ({ placeholder, label }: InputProps) => {
  return (
    <Container>
      {label ? <span className="input-label">{label}</span> : null}
      <input placeholder={placeholder} className="custom-input-text" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 6px;
  border: 1px solid rgba(58, 79, 98, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;

  .input-label {
    font-size: 14px;
    line-height: 24px;
    padding: 0px 5px;
  }

  input {
    width: 100%;
    text-align: right;
    outline: none;
    border: none;

    font-size: 14px;
    line-height: 24px;
    color: #3a4f62;
  }
`;

export default InputText;
