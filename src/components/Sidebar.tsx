import React from "react";
import styled from "styled-components/macro";

// assets
import FarmaCareIcon from "../assets/icons/farmacare-logo.svg";
import CogIcon from "../assets/icons/cog.svg";
import CashierIcon from "../assets/icons/cashier.svg";
import BoxIcon from "../assets/icons/box.svg";

export type Menus = {
  label: string;
  icon: any;
  key: "inventory" | "settings" | "cashier";
};

const Sidebar = () => {
  const menus: Menus[] = [
    { label: "Kasir", icon: CashierIcon, key: "cashier" },
    {
      label: "Inventori",
      icon: BoxIcon,
      key: "inventory",
    },
    {
      label: "Pengaturan",
      icon: CogIcon,
      key: "settings",
    },
  ];

  // submenu list
  const subMenus = {
    inventory: [
      {
        label: "Stok barang",
        icon: "",
        key: "goodsStock",
      },
      {
        label: "Faktur Pembelian",
        icon: "",
        key: "purchaseInvoice",
      },
      {
        label: "PBF",
        icon: "",
        key: "pbf",
      },
      {
        label: "Stok Opname",
        icon: "",
        key: "stokOpname",
      },
    ],
    settings: null,
    cashier: null,
  };

  const SidebarMenu = () => {
    const list: any[] = [];

    menus.forEach((e) => {
      list.push(
        <MenuBox>
          <div className="image-container">
            <img src={e.icon} />
          </div>
          <label className="menu__title">{e.label}</label>
        </MenuBox>
      );

      if (subMenus[e.key]) {
        subMenus[e.key]?.forEach((m) => {
          list.push(
            <MenuBox isActive={m.key === "purchaseInvoice"}>
              <div className="image-container" />
              <label>{m.label}</label>
            </MenuBox>
          );
        });
      }
    });

    return list;
  };

  return (
    <Container>
      <Header>
        <img src={FarmaCareIcon} alt="Farmacare" />
        <div className="sidebar__apotek-name">Apotek Rizal</div>
        <div className="sidebar__username">
          <div className="username__photo">R</div>
          <span className="username__title">Rizal </span>
        </div>
      </Header>

      <div className="sidebar__list">{SidebarMenu()}</div>
    </Container>
  );
};

const Container = styled.div`
  z-index: 999;
  height: 100%;
  min-width: 200px;
  max-width: 200px;
  background: #333951;

  .sidebar__list {
    margin-top: 8px;
  }
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f3f5f7;

  .sidebar__apotek-name {
    color: #fff;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    margin-top: 4px;
  }

  .sidebar__username {
    display: flex;
    align-items: center;
    margin-top: 20px;

    .username__photo {
      margin-right: 8px;
      background-color: #fff;
      color: #3a4f62;
      height: 32px;
      width: 32px;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .username__title {
      color: #fff;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const MenuBox = styled.div<{ isActive?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 10px 22px;
  color: #fff;

  font-size: 14px;
  line-height: 24px;
  transition: 0.3s;

  background-color: ${({ isActive }) => (isActive ? "#0B93A2" : "transparent")};

  .menu__title {
    font-weight: 700;
  }

  .image-container {
    width: 20px;
    margin-right: 22px;
  }

  :hover {
    background-color: #232736;
  }
`;

export default Sidebar;
