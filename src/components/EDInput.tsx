import React from "react";
import styled from "styled-components/macro";

const EDInput = () => {
  return (
    <Container>
      <input placeholder="MM"></input>
      <div className="divider" />
      <input placeholder="YY"></input>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid rgba(58, 79, 98, 0.2);
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
