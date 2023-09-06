import { search, clear, clearDark, filter, arrowButtonDown } from "../assets";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react"
import purecss from "../purecss.module.css";
import Datepicker from "react-tailwindcss-datepicker"; 
import axios from "axios";

const categories = [
  { id: "checkbox-item-1", text: "illicit" },
  { id: "checkbox-item-2", text: "legitimate" },
  { id: "checkbox-item-3", text: "misinformation" },
  { id: "checkbox-item-4", text: "scam" },
  { id: "checkbox-item-5", text: "spam" },
  { id: "checkbox-item-6", text: "trivial" },
  { id: "checkbox-item-7", text: "unsure" },
];

const Messages = () => {

  const [messages, setMessages] = useState([])
  const [filterObject, setFilterObject] = useState({
    categories: "illicit, legitimate, misinformation, scam, spam, trivial, unsure",
    status: "All",
    reported: "1 - 5 times",
    period: "Jan 2022 - Latest",
    periodStartTimestamp: 0,
    periodEndTimestamp: Math.floor(Date.now() / 1000),
    datepickervalue: {
        dpstartDate: new Date(),
        dpendDate: new Date().setMonth(11)
    }
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isCategoriesToggled, setIsCategoriesToggled] = useState(false)
  const [isStatusToggled, setIsStatusToggled] = useState(false)
  const [isReportedToggled, setIsReportedToggled] = useState(false)
  const [searchText, setSearchText] = useState("");
  const [selectedCateogries, setSelectedCategories] = useState(
    categories.reduce(
      (obj, category) => ({ ...obj, [category.text]: false }),
      {}
    )
  );

  const drop = useRef(null);
  const statusDropdown = useRef(null);
  const reportedDropdown = useRef(null);

  useEffect(() => {
    fetchMessages()
  }, [])

  
  const fetchMessages = () => {
    setIsLoading(true)
    fetch("https://checkmate.sg/api/publicmessages", {
        method: "GET",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
    }).then(response => {
        return response.json()
      }).then(data => {
        console.log(data.hits)
        setIsLoading(false)
        setMessages(data.hits)
    });
  }
    
  function handleClick(e) {
    if (!e.target.closest(`#${drop.current.id}`) && isCategoriesToggled ) {
        setIsCategoriesToggled(false);
    }
    if (!e.target.closest(`#${statusDropdown.current.id}`) && isStatusToggled ) {
        setIsStatusToggled(false);
    }
  }

  const handleDatePickerValueChange = datepickervalue => {
    console.log("newValue:", newValue);
    setFilterObject({...filterObject, datepickervalue})
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
        document.removeEventListener("click", handleClick);
    };
  })

  const truncate = (str, len) => {
    return str.length > len ? str.substring(0, len-1) + "..." : str;
  }

  const capitalizeFirstLetter = (str) => {
    return (str[0].toUpperCase() + str.slice(1));
  }

  const convertTimestamp = (timestamp) => {
    const date= new Date(timestamp);
    const dateFormat = date.toDateString() + " " + date.getHours() + ":" + date.getMinutes();
    return dateFormat
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const BASE_URL = "https://checkmate.sg/api/publicmessages_exp?";
    let endpoint = BASE_URL;

    try {
      setIsLoading(true);
      if (searchText.length !== 0) {
        endpoint += `search=${searchText}`;
      } else {
        endpoint += `search=''`;
      }

      const finalCategories = Object.keys(selectedCateogries).filter(
        (key) => selectedCateogries[key]
      );

      if (finalCategories.length !== 0) {
        endpoint += `&categories=${finalCategories.join(",")}`;
      }

      const response = await axios.get(endpoint);

      const result = response.data;

      setMessages(result.hits);
      setIsLoading(false);
    } catch (error) {
      console.error(`Error:`, error);
    }
  };

  return (
    <div className="w-full bg-checkBG font-poppins flex flex-col items-center max-w-[1280px] mx-auto">
        <h1 className="flex-1 w-full font-poppins font-semibold ss:text-[64px] text-[48px] text-checkShadeDark text-left pt-16 pb-8">
          Message Database
        </h1>
        {/** Search bar */}
        <form onSubmit={handleSearchSubmit} className="w-full rounded-[50px] bg-checkWhite flex flex-row gap-x-2 px-6 py-6 items-center">
            <img src={search} className="h-7 flex-none" alt="search" />
            <input
                className="ss:text-[20px] text-[14px] ml-4 flex-grow"
                type="text"
                placeholder="Search..."
                name="searchText"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <img src={clear} className="flex-none" alt="Clear" onClick={() => setSearchText("")}/>

            <div className="border-r border-r-checkGray flex-none">&nbsp;</div>
            
            {/** Category selector */}            
            <div className="relative" id="dropdown" ref={drop}>
                
                <button id="dropdownCheckboxButton" className="bg-checkWhite px-5 py-2.5 text-center inline-flex items-center text-gray-400" 
                        type="button" 
                        onClick={() => {
                            setIsCategoriesToggled(isCategoriesToggled => !isCategoriesToggled);
                        }}>
                    <span className="pr-10 ss:text-[20px] text-[14px]">Category </span>
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>

                {isCategoriesToggled && <div id="dropdownDefaultCheckbox" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-[3rem] left-8">
                    <ul className="p-3 space-y-3 text-sm text-gray-700" aria-labelledby="dropdownCheckboxButton">
                        {categories.map((category) => {
                            const { id, text } = category;

                            return (
                                <li key={id}>
                                <div className="flex items-center">
                                    <input
                                    id={id}
                                    type="checkbox"
                                    value={text}
                                    className="w-4 h-4 text-checkPrimary600 bg-gray-100 border-gray-300 rounded"
                                    onChange={(e) =>
                                        setSelectedCategories({
                                        ...selectedCateogries,
                                        [text]: e.target.checked,
                                        })
                                    }
                                    checked={selectedCateogries[text]}
                                    />
                                    <label
                                    htmlFor={id}
                                    className="ml-2 text-gray-400 capitalize"
                                    >
                                    {text}
                                    </label>
                                </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>}
            </div>
            

            

        </form>

        {/** Filters line */}
        <div className="flex flex-row flex-wrap w-full justify-start items-center p-8 gap-x-4">
            <img src={filter} className=""/>
            <div className="">Filter</div>
            <div className="border-r border-r-checkGray flex-none h-[3rem]">&nbsp;</div>
            
            <div className="relative" id="statusDropdown" ref={statusDropdown}>
                <div className="cursor-pointer rounded-[50px] border border-checkShadeDark px-4 py-2 flex flex-row gap-x-4 items-center"
                    onClick={() => {
                        setIsStatusToggled(isStatusToggled => !isStatusToggled);
                }}>
                    <div className="">Status: {filterObject.status}</div>
                    <img src={arrowButtonDown} className="h-2" alt=""/>
                </div>
                {isStatusToggled && <div className=""><ul><li>Option1.1</li></ul></div>}
            </div>
            
            <div className="relative" id="reportedDropdown" ref={reportedDropdown}>
                <div className="cursor-pointer rounded-[50px] border border-checkShadeDark px-4 py-2 flex flex-row gap-x-4 items-center"
                    onClick={() => {
                        setIsReportedToggled(isReportedToggled => !isReportedToggled);
                }}>
                    <div className="">Reported: {filterObject.reported}</div>
                    <img src={arrowButtonDown} className="h-2" alt="" />
                    {isReportedToggled && <div className=""><ul><li>Option2.1</li></ul></div>}
                </div>
            </div>

            <div className="" id="periodDropdown" >
                <div className="cursor-pointer rounded-[50px] border border-checkShadeDark px-4 py-2 flex flex-row gap-x-4 items-center">
                    <div className="">Reported: </div>
                    <Datepicker 
                        primaryColor={"blue"}
                        value={filterObject.datepickervalue} 
                        onChange={handleDatePickerValueChange} 
                    />
                    <img src={clearDark} className="flex-none h-4 fill-checkShadeDark" alt="Clear" />
                </div>
            </div>

        </div>

        {/** Messages section */}
        {isLoading ? 
        <span className={purecss.loader}></span>
        : 
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-8 mb-8 mt-8">
        {messages.map( (message, index) => {
            message = message.document 
            if (message.truthScore) {var messageWidth = Math.round ( ( (Math.round(message.truthScore * 100) / 100) * 100 ) / 5 )}
            else {var messageWidth = 0}
            return (
            <div key={index} className="flex flex-col w-[calc(33.33%-2rem)]">
                <div className="flex flex-col gap-y-4 bg-checkWhite rounded-t-carousel px-6 pt-12 pb-6 h-[35vh]">
                    {/** Category */}
                    <div className="ss:text-[32px] text-[24px]">{message.category ? capitalizeFirstLetter(message.category) : ""}</div> 
                    {/** Report date */}
                    <div className="">Reported on&nbsp;{message.firstReceivedUnixTimestamp ? convertTimestamp(message.firstReceivedUnixTimestamp) : ""}</div> 
                    {/** Message */}
                    <div className="">{message.text ? truncate(message.text, 200) : ""}</div>
                </div>
                <div className="flex flex-col gap-y-4 bg-checkGray rounded-b-carousel px-6 pt-6 pb-12">
                    {/** Truth Score */}
                    {message.truthScore ?
                        <div className="flex flex-row items-center">Truth score&nbsp;
                            <div className="w-24 bg-checkWhite rounded-full h-2.5">
                                <div className={`bg-checkPrimary600 h-2.5 rounded-full w-[${messageWidth}%]`}></div>
                            </div>
                        &nbsp;<span className="text-checkPrimary600 font-semibold">{Math.round(message.truthScore * 100) / 100}</span>&nbsp;of 5</div> 
                    : "" }
                    {/** Status */}
                    <div className="">Status&nbsp;{message.isAssessed ? 
                        <span className="text-checkWhite px-4 py-1 bg-checkPrimary600 rounded-[50px]">Reviewed </span>
                        : 
                        <span className="text-checkPrimary600 px-4 py-1 bg-checkWhite rounded-[50px]">Reviewing</span>
                    }</div> 
                    {/** Reported */}
                    <div className="">Reported&nbsp;<span className="text-checkPrimary600 font-semibold">
                            { (message.instanceCount && message.instanceCount != "1") ? (message.instanceCount + " times") : "1 time" }
                        </span>
                    </div> 
                </div>
            </div>
        )})}    
        </div>}
    </div>
  );
};

export default Messages;
