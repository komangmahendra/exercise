import React from "react";
import styled from "styled-components/macro";

// asset
import ChevronIcon from "../assets/icons/chevron.svg";

export type PageHeaderProps = {
  children?: React.ReactNode;
  title?: string;
};

const PageHeader = ({ children, title }: PageHeaderProps) => {
  return (
    <Container>
      <div className="page-header__back-container">
        <img src={ChevronIcon} />
        <span>Faktur Pembelian</span>
      </div>
      <div className="page-header__title-container">
        <span className="title">{title}</span>
        {children ? <div className="right-container">{children}</div> : null}
      </div>
    </Container>
  );
};

export default PageHeader;

const Container = styled.div`
  padding: 32px;

  .page-header__back-container {
    display: flex;
    align-items: center;

    width: 100%;
    > img {
      transform: rotate(180deg);
      margin-right: 10px;
    }
  }

  .page-header__title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {
      font-weight: bold;
      font-size: 32px;
      line-height: 52px;
    }

    .page-header__action-button {
      display: flex;

      > .action-button :not(:first-child) {
        margin-left: 10px;
      }
    }
  }
`;
