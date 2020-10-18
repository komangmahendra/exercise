import React from "react";
import styled from "styled-components/macro";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  inverse?: boolean;
};

const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button type={props.type} onClick={props.onClick} inverse={props.inverse}>
      {props.title}
    </Button>
  );
};

const Button = styled.button<{ inverse?: boolean }>`
  background-color: ${({ inverse }) => (inverse ? "#13C2CD" : "#fff")};
  border-radius: 4px;
  border: 2px solid;
  border-color: ${({ inverse }) => (!inverse ? "#13C2CD" : "#0B93A2")};

  padding: 8px 16px;
  cursor: pointer;

  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${({ inverse }) => (!inverse ? "#13C2CD" : "#fff")};

  &:hover {
    background-color: ${({ inverse }) => (inverse ? "#0B93A2" : " #e8f7f7")};
  }

  &:focus {
    outline: none;
  }
`;

export default ButtonComponent;
