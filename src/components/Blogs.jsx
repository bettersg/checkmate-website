import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { mockNotionData } from "../utils";
import purecss from "../purecss.module.css";
import { delay } from "../utils/mockTime";
import { chunk } from "lodash";
import { arrowBack } from "../assets";

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
  embed: (block) => {
    return {
      component: "Embed",
      url: block.embed.url,
    };
  },
  quote: (block) => {
    return {
      component: "Quote",
      text: block.quote.rich_text[0].plain_text,
    };
  },
};

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
        articleTitle: entryProperties["Article Title"].title[0].plain_text,
        summary: entryProperties["Summary"].rich_text[0].plain_text,
        duration: entryProperties["Duration"].number,
        previewImageURL:
          entryProperties["Preview Image"].rich_text[0].plain_text,
        Tags: entryProperties["Tags"].multi_select.map((tag) => tag["name"]),
        authorName: entryProperties["Author Name"].rich_text[0].plain_text,
        publishingDate: entryProperties["Publishing Date"].date.start,
      },
      children: tranformBlocks(children),
    };
  });

  return components;
};
const SelectedBlog = ({
  selectedBlogSummaryData,
  selectedBlogData,
  setSelectedBlog,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const blogRef = useRef(null);

  const handleScroll = () => {
    if (blogRef.current) {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
    }
  };
  console.log(scrollProgress);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={blogRef}
      className="min-h-screen flex flex-col xl:max-w-[1280px] w-full mx-auto px-6 md:px-12 py-10 md:py-20"
    >
      <div className="flex items-center mb-4">
        <img src={arrowBack} alt="back" className="w-4 h-4 mr-2" />
        <button
          className=" hover:bg-slate-300 rounded mr-auto"
          onClick={() => setSelectedBlog(null)}
        >
          Back
        </button>
      </div>
      {/* Progress bar */}
      <div className="flex flex-col gap-y-6 px-4 sm:px-0 relative">
        <div className="flex w-full space-between fixed right-0 mx-8 sm:mx-0 top-[22%] sm:sticky z-50 sm:top-28 bg-slate-200">
          <div className="absolute right-0 bottom-2">
            {Math.round(scrollProgress)}% read
          </div>
          <div
            className="sticky z-50 h-2 top-24  bg-black "
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="lg:text-6xl text-4xl font-bold my-5 sm:my-10">
            {selectedBlogSummaryData.articleTitle}
          </h1>
          <div className="flex flex-col border-b border-t border-slate-300 py-2 sm:text-lg">
            {/* Author name */}
            <div className="inline-block">
              {selectedBlogSummaryData.authorName}
            </div>
            <div className=" flex gap-x-2 text-slate-500">
              {/* Min read */}
              <div className="inline-block">
                {selectedBlogSummaryData.duration} min read
              </div>
              {/* Date */}
              <div className="inline-block">
                {selectedBlogSummaryData.publishingDate}
              </div>
            </div>
          </div>
        </div>

        {selectedBlogData.map((component, index) => {
          return (
            <React.Fragment key={index}>
              {component.component === "Heading" && (
                <h2 className="text-2xl sm:text-4xl font-bold">
                  {component.text}
                </h2>
              )}
              {component.component === "Paragraph" && (
                <p className="text-sm sm:text-lg">{component.text}</p>
              )}
              {/* Not sure why Notion sometimes reports it as 'image', others 'embed' */}
              {(component.component === "Embed" && (
                <img
                  src={component.url}
                  alt="preview"
                  className="w-full max-h-[320px] object-cover rounded md"
                />
              )) ||
                (component.component === "Image" && (
                  <img
                    src={component.imageURL}
                    alt="preview"
                    className="w-full max-h-[320px] object-cover rounded md"
                  />
                ))}
              {component.component === "Quote" && (
                <blockquote className="text-3xl sm:text-5xl font-bold">
                  "{component.text}"
                </blockquote>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div
        className={`sticky bottom-0 right-[50%] flex justify-center sm:mt-20 transition-opacity duration-300 ${
          scrollProgress >= 50 ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="bg-slate-300 rounded-full p-4 sm:p-8 hover:bg-slate-400 transition-all duration-200 ease-in-out "
        >
          Top
        </button>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [paginatedDataChunks, setPaginatedDataChunks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchNotionData = async () => {
      let data;
      if (import.meta.env.VITE_DEVELOPMENT === "TRUE") {
        await delay(300);
        data = mockNotionData;
      } else {
        data = (await axios.get(demoEndpoint)).data.reverse();
      }

      const components = convertJSONToComponents(data);
      setBlogPosts(components); // Non-paginated option
      if (components.length !== 0) {
        setPaginatedDataChunks(chunk(components, 4));
      }

      setIsLoading(false);
    };
    fetchNotionData();
  }, []);

  const numChunks = Math.floor(blogPosts.length / 4);
  const selectedBlogSummaryData = blogPosts?.[selectedBlog]?.summaryData;
  const selectedBlogData = blogPosts?.[selectedBlog]?.children;

  const handleTabsClick = (e) => {
    const tabName = e.target.name;
    setActiveTab(tabName);
    // TODO: Replace data with filtered data
  };

  const handleBlogSelection = (index) => {
    setSelectedBlog(index);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const SummaryPage = () => {
    return (
      <div className="flex flex-col divide-y text-sm sm:text-lg relative min-h-screen xl:max-w-[1280px] w-full mx-auto px-6 md:px-12 py-10 md:py-20">
        {/* Nav -- Refactor to Layout component */}
        <nav className="">
          <ul className="flex gap-x-4">
            <li
              className={`${
                activeTab === "all" ? "border-b-4  border-black" : ""
              } pb-2`}
            >
              <button name="all" onClick={(e) => handleTabsClick(e)}>
                All
              </button>
            </li>
            <li
              className={`${
                activeTab === "blogs" ? "border-b-4 border-black" : ""
              } pb-2`}
            >
              <button name="blogs" onClick={(e) => handleTabsClick(e)}>
                Blog Posts
              </button>
            </li>
            <li
              className={`${
                activeTab === "events" ? "border-b-4 border-black" : ""
              } pb-2`}
            >
              <button
                className="opacity-50"
                disabled
                name="events"
                onClick={(e) => handleTabsClick(e)}
              >
                Events around the year
              </button>
            </li>
          </ul>
        </nav>

        {/* Page Data  */}
        {isLoading ? (
          <div className="mx-auto">
            <span className={purecss.loader}></span>
          </div>
        ) : (
          paginatedDataChunks.length !== 0 &&
          paginatedDataChunks[paginationIndex].map((component, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-[30%_1fr] sm:grid-cols-[128px_1fr] gap-x-4 items-center gap-y-3 py-5 sm:py-10 container px-4 sm:px-0 justify-center cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out"
                onClick={() => handleBlogSelection(index + paginationIndex * 4)}
              >
                {/* Author Name */}
                <p className="w-20 lg:w-32">
                  {component.summaryData.authorName.slice(0, 10)}
                </p>
                {/* Date */}
                <p>
                  {new Date(
                    component.summaryData.publishingDate
                  ).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                {/* Image */}
                <img
                  src={component.summaryData.previewImageURL}
                  alt="preview"
                  className="w-32 lg:w-32 aspect-square object-cover rounded-md mr-4"
                />
                {/* Title, Summary */}
                <div className="flex flex-col">
                  <h2 className="capitalize text-lg font-bold">
                    {component.summaryData.articleTitle}
                  </h2>
                  <p className="hidden sm:inline-block">
                    {component.summaryData.summary.substring(0, 300)}
                    {component.summaryData.summary.length > 300 ? "..." : ""}
                  </p>
                </div>
                <div className="flex gap-x-1">
                  {component.summaryData.Tags.map((tag) => (
                    <span
                      key={`article-${index}-tag-${tag}`}
                      className="inline-block border rounded-full bg-slate-300 p-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{component.summaryData.duration} min read</p>
              </div>
            );
          })
        )}

        {/* Pagination */}
        {/* Num articles + Articles per pagination + Increment index % number articles */}
        <div className="flex justify-center  container gap-10 py-10">
          <button
            className="p-4 rounded bg-black text-white disabled:opacity-20 hover:opacity-50"
            disabled={paginationIndex === 0}
            onClick={() => setPaginationIndex(Math.max(0, paginationIndex - 1))}
          >
            Prev
          </button>
          <button
            className="p-4 rounded bg-black text-white disabled:opacity-20 hover:opacity-50"
            disabled={paginationIndex === numChunks}
            onClick={() => {
              setPaginationIndex(Math.min(paginationIndex + 1), numChunks);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {selectedBlog !== null ? (
        <SelectedBlog
          selectedBlogSummaryData={selectedBlogSummaryData}
          selectedBlogData={selectedBlogData}
          setSelectedBlog={setSelectedBlog}
        />
      ) : (
        <SummaryPage />
      )}
    </div>
  );
};

export default Blogs;
