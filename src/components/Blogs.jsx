import React, { useState } from "react";
import axios from "axios";

const demoEndpoint = import.meta.env.VITE_FIREBASE_NOTION_ENDPOINT;

// TODO: Finish up implementation
const tranformBlocks = (blocks) => {
  const blockMap = {};
  return blocks
    .map((block) => {
      if (blockMap[block.type]) {
        return blockMap[block.type][block];
      }
    })
    .filter(Boolean);
};

const convertJSONToComponents = (entries) => {
  const components = entries.map((entry) => {
    const { properties: entryProperties, children } = entry;

    return {
      summaryData: {
        summary: entryProperties["Summary"].rich_text[0].plain_text,
        duration: entryProperties["Duration"].number,
        previewImageURL:
          entryProperties["Preview Image"].rich_text[0].plain_text,
        Tags: entryProperties["Tags"].multi_select.map((tag) => tag["name"]),
      },
      children: tranformBlocks(children), // TODO: Finish up implementation
    };
  });

  return components;
};

const Blogs = () => {
  const [notionData, setNotionData] = useState("");
  const [notionDataComponents, setNotionDataComponents] = useState([]);

  const handleNotionDataRetrievalClick = async () => {
    const data = (await axios.get(demoEndpoint)).data;

    // setNotionData(JSON.stringify(data));
    const components = convertJSONToComponents(data);
    setNotionDataComponents(components);
  };

  const SummaryPage = () => {
    return (
      <div className="flex flex-col">
        {/* Nav -- Refactor to Layout component */}

        {/* Page Data  */}
        {notionDataComponents.map((component, index) => {
          return (
            <div key={index}>
              <h1>{component.summaryData.summary}</h1>
              <p>{component.summaryData.duration}</p>
              <img src={component.summaryData.previewImageURL} alt="preview" />
              <p>{component.summaryData.Tags.join(", ")}</p>
            </div>
          );
        })}

        {/* Pagination */}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        className="border border-black rounded p-3"
        onClick={handleNotionDataRetrievalClick}
      >
        GET NOTION API DATA
      </button>
      <hr />
      <SummaryPage />
    </div>
  );
};

export default Blogs;
