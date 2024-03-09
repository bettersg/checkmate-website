import React, { useEffect, useState } from "react";
import axios from "axios";
import { configDotenv } from "dotenv";
import { Link } from "react-router-dom";

const demoEndpoint = import.meta.env.VITE_FIREBASE_NOTION_ENDPOINT;

const blockMap = {
  heading_1: (block) => {
    return {
      component: "Heading",
      text: block.heading_1.rich_text[0].plain_text,
    };
  },
  heading_2: (block) => {
    return {
      component: "Heading",
      text: block.heading_2.rich_text[0].plain_text,
    };
  },
  paragraph: (block) => {
    if (block.paragraph.rich_text.length === 0) {
      return null;
    }
    return {
      component: "Paragraph",
      text: block.paragraph.rich_text
        .map(({ plain_text }) => plain_text)
        .join(""),
    };
  },
  image: (block) => {
    return {
      component: "Image",
      imageURL: block.image.external.url,
    };
  },
  quote: (block) => {
    return {
      component: "Quote",
      text: block.quote.rich_text[0].plain_text,
    };
  },
};

// TODO: Finish up implementation
const tranformBlocks = (blocks) => {
  return blocks
    .map((block) => {
      if (blockMap[block.type]) {
        return blockMap[block.type](block);
      }
      console.log("NOT SUPPORTED:", block.type);
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

  // console.log(JSON.stringify(components[0].children, null, 2));

  return components;
};

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchNotionData = async () => {
      const data = (await axios.get(demoEndpoint)).data;
      const components = convertJSONToComponents(data);
      setBlogPosts(components);
    };
    fetchNotionData();
  }, []);

  const handleTabsClick = (e) => {
    const tabName = e.target.name;
    setActiveTab(tabName);
    // TODO: Replace data with filtered data
  };

  const SummaryPage = () => {
    return (
      <div className="flex flex-col divide-y text-sm sm:text-lg">
        {/* Nav -- Refactor to Layout component */}
        <nav className="">
          <ul className="flex gap-x-4">
            <li
              className={`${
                activeTab === "all" ? "border-b border-black" : ""
              }`}
            >
              <button name="all" onClick={(e) => handleTabsClick(e)}>
                All
              </button>
            </li>
            <li
              className={`${
                activeTab === "blogs" ? "border-b border-black" : ""
              }`}
            >
              <button name="blogs" onClick={(e) => handleTabsClick(e)}>
                Blog Posts
              </button>
            </li>
            <li
              className={`${
                activeTab === "events" ? "border-b border-black" : ""
              }`}
            >
              <button name="events" onClick={(e) => handleTabsClick(e)}>
                Events around the year
              </button>
            </li>
          </ul>
        </nav>

        {/* Page Data  */}
        {blogPosts.map((component, index) => {
          return (
            <Link to={`/blogs/${index}`}>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
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
            </Link>
          );
        })}

        {/* Pagination */}
        <div className="flex justify-center  container gap-10 py-10">
          {/* Num articles + Articles per pagination + Increment index % number articles */}
          <button className="p-6 rounded bg-black text-white">1</button>
          <button className="p-6 rounded bg-black text-white">2</button>
          <button className="p-6 rounded bg-black text-white">3</button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SummaryPage />
    </div>
  );
};

export default Blogs;
