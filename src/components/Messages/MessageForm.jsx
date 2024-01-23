import { useReducer, useState, useRef, useEffect } from "react";
import dayjs from "dayjs";

import { categories } from "../../constants";
import { produce } from "immer";
import { Filters } from "./Filters";
import { ACTIONS } from "./actions";

const createDefaultCategoriesSelected = () =>
  categories.reduce((map, category) => {
    map[category.text] = true;
    return map;
  }, {});

const getFormattedDaysAgo = (days = 0) => {
  return dayjs().subtract(days, "days").format("YYYY-MM-DD");
};

const initialState = {
  searchText: "",
  categories: createDefaultCategoriesSelected(),
  status: "All",
  reportCount: 1,
  reportDatePeriod: {
    startDate: getFormattedDaysAgo(),
    endDate: getFormattedDaysAgo(90),
  },
};

export const MessageForm = () => {
  const [isCategoriesDropDownOpen, setIsCategoriesDropDownOpen] =
    useState(false);

  const categoriesDropDownRef = useRef(null);

  const [state, dispatch] = useReducer(
    produce((draft, action) => {
      switch (action.type) {
        case ACTIONS.UPDATE_SEARCH_TEXT:
          draft.searchText = action.payload;
          break;
        case ACTIONS.UPDATE_SELECTED_CATEGORIES:
          draft.categories[action.payload] = !draft.categories[action.payload];
          break;
        case ACTIONS.UPDATE_STATUS:
          draft.status = action.payload;
          break;
        case ACTIONS.UPDATE_REPORTED_COUNT:
          console.log(action.payload);
          draft.reportCount = action.payload;
          break;
        case ACTIONS.UPDATE_REPORTED_PERIOD:
          console.log(action.payload);
          draft.reportDatePeriod = action.payload;
          break;
      }
    }),
    initialState
  );

  // this is where we handle toggle of each filter dropdown
  function handleClick(e) {
    // Categories drop-down
    if (
      !e.target.closest(`#${categoriesDropDownRef.current.id}`) &&
      isCategoriesDropDownOpen
    ) {
      setIsCategoriesDropDownOpen(false);
    }
  }

  // event listener to detect clicks outside of a dropdown and therefore closing the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="flex flex-col gap-y-10">
      <ul>
        <h1 className="text-2xl">LIVE UPDATING OF VALUES</h1>
        <li className="text-red-400">
          {state.searchText.length !== 0
            ? state.searchText
            : "Empty Search Text"}
        </li>
        <ul>
          {Object.keys(state.categories).map((key) => (
            <li key={key}>
              <span className="text-red-400">{key}: </span>
              {state.categories[key] ? "true" : "false"}
            </li>
          ))}
        </ul>
        <li>
          <span className="text-red-400">Status: </span>
          {state.status}
        </li>
        <li>
          <span className="text-red-400">Reported count value: </span>
          {state.reportCount}
        </li>
        <ul>
          {Object.keys(state.reportDatePeriod).map((key) => (
            <li key={key}>
              <span className="text-red-400">{key}: </span>
              {state.reportDatePeriod[key]}
            </li>
          ))}
        </ul>
      </ul>

      <form className="flex flex-col gap-y-10">
        {/* Search Input */}
        <div>
          <h2>Search box</h2>
          <input
            placeholder="Text Input"
            type="text"
            onChange={(e) =>
              dispatch({
                type: ACTIONS.UPDATE_SEARCH_TEXT,
                payload: e.target.value,
              })
            }
          />
        </div>

        {/* Category Selector */}
        <div>
          <h2>Categories</h2>
          <div className="relative" id="dropdown" ref={categoriesDropDownRef}>
            <button
              id="dropdownCheckboxButton"
              className="bg-checkWhite lg:px-5 py-2.5 text-center inline-flex items-center text-gray-400"
              type="button"
              onClick={() =>
                setIsCategoriesDropDownOpen(() => !isCategoriesDropDownOpen)
              }
            >
              <span className="max-lg:hidden pr-10 ss:text-[20px] text-[14px]">
                Category{" "}
              </span>
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isCategoriesDropDownOpen && (
              <div
                id="dropdownDefaultCheckbox"
                className="z-10 w-100 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-[3rem] max-lg:right-2 lg:left-8"
              >
                <ul
                  className="p-3 space-y-3 text-sm text-gray-700"
                  aria-labelledby="dropdownCheckboxButton"
                >
                  {Object.keys(state.categories).map((category) => {
                    return (
                      <li key={category}>
                        <div className="flex items-center">
                          <input
                            id={category}
                            type="checkbox"
                            value={category}
                            name={category}
                            className="w-4 h-4 text-checkPrimary600 bg-gray-100 border-gray-300 rounded"
                            onChange={(e) =>
                              dispatch({
                                type: ACTIONS.UPDATE_SELECTED_CATEGORIES,
                                payload: e.target.value,
                              })
                            }
                            checked={state.categories[category]}
                          />
                          <label
                            htmlFor={category}
                            className="ml-2 text-gray-400 capitalize"
                          >
                            {category}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Status */}
        <div>
          <Filters state={state} dispatch={dispatch} />
        </div>
      </form>
    </div>
  );
};
