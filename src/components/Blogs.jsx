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
  const [blogPosts, setBlogPosts] = useState([]);

  const handleNotionDataRetrievalClick = async () => {
    const data = (await axios.get(demoEndpoint)).data;

    const components = convertJSONToComponents(data);
    setBlogPosts(components);
  };

  const SummaryPage = () => {
    return (
      <div className="flex flex-col divide-y text-sm sm:text-lg">
        {/* Nav -- Refactor to Layout component */}

        {/* Page Data  */}
        {blogPosts.map((component, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-y-3 py-5 sm:py-10 container px-4 sm:px-0 justify-center"
            >
              <div className="flex gap-2">
                {/* Author Name */}
                <p>Author Name</p>
                {/* Date */}
                <p>
                  {new Date("05-02-2024").toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center">
                {/* Image */}
                <img
                  src={component.summaryData.previewImageURL}
                  alt="preview"
                  className="w-28 h-28 object-cover rounded-md mr-4"
                />
                {/* Title, Summary */}
                <div className="flex flex-col">
                  <h2 className="capitalize text-lg font-bold">
                    long title goes here
                  </h2>
                  <p className="hidden sm:inline-block">
                    {/* {component.summaryData.summary.substring(0, 50)}
                    {component.summaryData.summary.length > 50 ? "..." : ""} */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehe
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex gap-x-1">
                  {component.summaryData.Tags.map((tag) => (
                    <span className="inline-block border rounded-full bg-slate-300 p-1 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{component.summaryData.duration} min read</p>
              </div>
            </div>
          );
        })}
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
