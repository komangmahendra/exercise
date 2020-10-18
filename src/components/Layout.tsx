import React from "react";
import styled from "styled-components";

// component
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <Root>
      <Sidebar />
      <div className="page-container">{children}</div>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .page-container {
    width: 100%;
  }
`;

export default Layout;
