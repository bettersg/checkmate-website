import styles from "../style";
import { logoSimple } from "../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import purecss from "../purecss.module.css";

const Messages = () => {

  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
        console.log(data)
        setIsLoading(false)
        setMessages(data)
    });
  }
    

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
  return (
    <div className="w-fullbg-checkBG font-poppins flex flex-col items-center max-w-[1280px] mx-auto">
      {isLoading ? 
        <span className={purecss.loader}></span>
        : 
        <div className="flex flex-row flex-wrap gap-x-8">
        {messages.map( (message) => { return (
            <div className="flex flex-col w-[calc(33.33%-2rem)]">
                <div className="flex flex-col gap-y-4 bg-checkWhite rounded-t-carousel px-6 pt-12 pb-6">
                    {/** Category */}
                    <div className="ss:text-[32px] text-[24px]">{message.primaryCategory ? capitalizeFirstLetter(message.primaryCategory) : ""}</div> 
                    {/** Report date */}
                    <div className="">Reported on&nbsp;{message.firstTimestamp ? convertTimestamp(message.firstTimestamp._seconds) : ""}</div> 
                    {/** Message */}
                    <div className="">{message.text ? truncate(message.text, 500) : ""}</div>
                </div>
                <div className="flex flex-col gap-y-4 bg-checkGray rounded-b-carousel px-6 pt-6 pb-12">
                    {/** Truth Score */}
                    <div className="">Truth score&nbsp;{message.truthScore || ""}</div> 
                    {/** Status */}
                    <div className="">Status&nbsp;{message.isAssessed ? 
                        <span className="text-checkWhite px-4 py-1 bg-checkPrimary600 rounded-[50px]">Reviewed </span>
                        : 
                        <span className="text-checkPrimary600 px-4 py-1 bg-checkWhite rounded-[50px]">Reviewing</span>
                    }</div> 
                    {/** Reported */}
                    <div className="">Reported&nbsp;<span className="text-checkPrimary">
                            { ( () => {
                            if (message.instanceCount) {
                                if(message.instanceCount == "1") {
                                return "1 time"
                                } else {
                                return message.instanceCount + " times"
                                } 
                            } else {
                                return "1 time"
                            }
                            })}
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
