import React from "react";
import styled from "styled-components/macro";

export type InputWithLabelProps = {
  children: React.ReactNode;
  label: string;
  hasMarker?: boolean;
};

const InputWithLabel = ({
  children,
  label,
  hasMarker,
}: InputWithLabelProps) => {
  return (
    <InputWithLabelContainer>
      <span className="label-title">
        {label} {hasMarker ? <span className="label-title__tnc">*</span> : null}
      </span>
      <div className="input-container">{children}</div>
    </InputWithLabelContainer>
  );
};

export default InputWithLabel;

export const InputWithLabelContainer = styled.div`
  .label-title {
    font-size: 14px;
    line-height: 24px;
  }

  .label-title__tnc {
    color: #eb5757;
  }

  .input-container {
    width: 100%;
    margin-top: 4px;
  }
`;
