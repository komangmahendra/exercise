import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import id from "date-fns/locale/id";

// assets
import CalendarIcon from "../assets/icons/calendar.svg";
import ChevronIcon from "../assets/icons/chevron.svg";

export type CalendarProps = {
  selectedDate: Date | null;
  onChange: (value: Date | null) => void;
};

const SingleDatePickerComponent = ({
  selectedDate,
  onChange,
}: CalendarProps) => {
  const CustomInput = ({ value, onClick }: any) => (
    <CalendarPickerContainer onClick={onClick}>
      <span>{value}</span>
      <img src={CalendarIcon} alt="calendar" />
    </CalendarPickerContainer>
  );

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: any) => {
    return (
      <div className="custom-header">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <img src={ChevronIcon} className="button-calendar__prev" alt="prev" />
        </button>

        <span className="custom-header__title">
          {moment(date).format("MMMM YYYY")}
        </span>

        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <img src={ChevronIcon} className="button-calendar__next" alt="next" />
        </button>
      </div>
    );
  };

  return (
    <Container>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          if (!Array.isArray(date)) {
            onChange(date);
          }
          return null;
        }}
        customInput={<CustomInput />}
        renderCustomHeader={renderCustomHeader}
        formatWeekDay={(weekName) => weekName.substring(0, 1)}
        locale={id}
      />
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
  line-height: 24px;
  width: 100%;

  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    > .custom-header__title {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;

      text-align: center;

      color: #3a4f62;
    }
  }

  .react-datepicker__input-container {
    span {
      color: #3a4f62 !important;
    }

    outline: none;
  }

  .react-datepicker__triangle {
    border-bottom-color: #fff;
  }

  .react-datepicker__header {
    background-color: #fff;
    border-bottom: none;

    button {
      border: none;
      background-color: #fff;
      outline: none;
      color: #3a4f62;
      cursor: pointer;

      > .button-calendar__prev {
        transform: rotate(180deg);
      }
    }
  }

  .react-datepicker__day--selected {
    color: #ffffff !important;
    background: #13c2cd;
    border-radius: 4px;
  }

  .react-datepicker__day {
    outline: none;
    color: #3a4f62;
    padding: 5px;

    :hover {
      background-color: #e8f7f7;
    }
  }

  .react-datepicker__day-name {
    color: #3a4f62;
    padding: 5px;
    font-weight: 700;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #fff;
  }
`;

const CalendarPickerContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  outline: none;

  min-width: 220px;
  border: 1px solid rgba(58, 79, 98, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px;

  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  :hover {
    border: 1px solid #3a4f62;
  }
`;

export default SingleDatePickerComponent;
