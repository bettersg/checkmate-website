import React, { useState, useRef, useEffect } from "react";
import { filter, arrowButtonDown } from "../../assets/";
import { statusValues, reportedValues } from "../../constants";
import Datepicker from "react-tailwindcss-datepicker";
import { ACTIONS } from "./actions";

const FilterIcon = () => <img src={filter} className="max-lg:hidden" />;
const ArrowButtonDown = () => (
  <img src={arrowButtonDown} className="max-lg:hidden h-2" />
);

export const Filters = ({ state, dispatch }) => {
  const [isStatusDropDownOpen, setIsStatusDropDownOpen] = useState(false);
  const [isReportedCountDropDownOpen, setIsReportedCountDropDownOpen] =
    useState(false);

  const statusDropDownRef = useRef(null);
  const reportedDropDownRef = useRef(null);

  // this is where we handle toggle of each filter dropdown
  function handleClick(e) {
    if (
      statusDropDownRef.current !== null &&
      !e.target.closest(`#${statusDropDownRef.current.id}`) &&
      isStatusDropDownOpen
    ) {
      setIsStatusDropDownOpen(false);
    } else if (
      reportedDropDownRef.current !== null &&
      !e.target.closest(`#${reportedDropDownRef.current.id}`) &&
      isReportedCountDropDownOpen
    ) {
      setIsReportedCountDropDownOpen(false);
    }
  }

  const getReportedText = () => {
    return reportedValues.find(
      (reportedValue) => reportedValue.value === state.reportCount
    ).text;
  };

  const handleDatePickerValueChange = (newValue) => {
    dispatch({ type: ACTIONS.UPDATE_REPORTED_PERIOD, payload: newValue });
  };

  // event listener to detect clicks outside of a dropdown and therefore closing the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="flex flex-row flex-wrap w-full justify-start items-center lg:p-8 gap-x-4 gap-y-4">
      <FilterIcon />
      <div className="max-lg:hidden">Filters</div>
      <div className="max-lg:hidden border-r border-r-checkGray flex-none h-[3rem]">
        &nbsp;
      </div>
      {/** Status dropdown */}
      <div className="relative" id="statusDropdown" ref={statusDropDownRef}>
        {/** Clickable button */}
        <div
          className={`cursor-pointer rounded-t-[40px]  ${
            isStatusDropDownOpen ? "" : "rounded-b-[40px]"
          } border border-checkShadeDark px-4 py-[1.1em] flex flex-col`}
          onClick={() => setIsStatusDropDownOpen(!isStatusDropDownOpen)}
        >
          {/** Dropdown title */}
          <div className="flex flex-row items-center gap-x-4">
            Status:&nbsp;
            {state.status}
            <ArrowButtonDown />
          </div>

          {/** Dropdown values */}
          {isStatusDropDownOpen && (
            <div className="w-full absolute top-[2.5rem] left-0 bg-checkBG rounded-b-[40px] p-4 border-x border-b z-10 border-checkShadeDark">
              <ul className="flex flex-col gap-y-4">
                {statusValues.map(({ text }) => {
                  return (
                    <li
                      key={text}
                      className=""
                      value={text}
                      onClick={(e) => {
                        dispatch({
                          type: ACTIONS.UPDATE_STATUS,
                          payload: text,
                        });
                      }}
                    >
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/** Reported count dropdown */}
      <div className="relative" id="reportedDropdown" ref={reportedDropDownRef}>
        <div
          className={`cursor-pointer rounded-t-[40px]  ${
            isReportedCountDropDownOpen ? "" : "rounded-b-[40px]"
          } border border-checkShadeDark px-4 py-[1.1em] flex flex-col`}
          onClick={() => {
            setIsReportedCountDropDownOpen(!isReportedCountDropDownOpen);
          }}
        >
          {/** Dropdown title */}
          <div className="flex flex-row gap-x-4 items-center">
            Reported:&nbsp;
            {getReportedText()}
            <ArrowButtonDown />
          </div>

          {/** Dropdown values */}
          {isReportedCountDropDownOpen && (
            <div className="w-full absolute top-[2.5rem] left-0 bg-checkBG rounded-b-[40px] p-4 border-x border-b z-10 border-checkShadeDark">
              <ul className="flex flex-col gap-y-4">
                {reportedValues.map((reportedValue) => {
                  const { id, text, value } = reportedValue;

                  return (
                    <li
                      key={id}
                      className=""
                      value={value}
                      onClick={() =>
                        dispatch({
                          type: ACTIONS.UPDATE_REPORTED_COUNT,
                          payload: value,
                        })
                      }
                    >
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/** Reported period datepicker */}
      <div className="" id="periodDropdown">
        <div className="cursor-pointer rounded-[40px] border border-checkShadeDark px-4 py-2 flex flex-row gap-x-4 items-center">
          <div className="">Reported: </div>
          <Datepicker
            primaryColor={"blue"}
            value={state.reportDatePeriod}
            onChange={handleDatePickerValueChange}
            showShortcuts={true}
          />
        </div>
      </div>
    </div>
  );
};
