import React from "react";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: import.meta.env.VITE_TYPESENSE_API_KEY,
    nodes: [
      {
        host: import.meta.env.VITE_TYPESENSE_ID + ".a1.typesense.net",
        port: "443",
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "text",
  },
});
const searchClient = typesenseInstantSearchAdapter.searchClient;
console.log(searchClient);

const Test = () => {
  return (
    <InstantSearch
      indexName="messagesDev"
      searchClient={typesenseInstantSearchAdapter.searchClient}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};

export default Test;
