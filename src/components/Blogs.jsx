import React, { useState } from "react";
import axios from "axios";

const demoEndpoint = import.meta.env.VITE_FIREBASE_NOTION_ENDPOINT;

const Blogs = () => {
  const [notionData, setNotionData] = useState("");

  const handleNotionDataRetrievalClick = async () => {
    const data = await axios.get(demoEndpoint);
    setNotionData(JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        className="border border-black rounded p-3"
        onClick={handleNotionDataRetrievalClick}
      >
        GET NOTION API DATA
      </button>

      <p>{notionData}</p>
    </div>
  );
};

export default Blogs;
