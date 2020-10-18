import React from "react";
import styled from "styled-components/macro";

type InputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  label?: string;
  textAlign?: "left" | "right" | "center";
};

const InputText = ({
  placeholder,
  label,
  value,
  textAlign,
  onChange,
}: InputProps) => {
  return (
    <Container textAlign={textAlign}>
      {label ? <span className="input-label">{label}</span> : null}
      <input
        placeholder={placeholder}
        className="custom-input-text"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

const Container = styled.div<{ textAlign?: "left" | "right" | "center" }>`
  display: flex;
  width: 100%;
  padding: 6px;
  border: 1px solid rgba(58, 79, 98, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;

  :hover {
    border-color: #3a4f62;
  }

  .input-label {
    font-size: 14px;
    line-height: 24px;
    padding: 0px 5px;
  }

  input {
    width: 100%;
    text-align: ${({ textAlign }) => textAlign || "right"};
    outline: none;
    border: none;

    font-size: 14px;
    line-height: 24px;
    color: #3a4f62;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #8f9fa8;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #8f9fa8;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #8f9fa8;
    }
  }
`;

export default InputText;
