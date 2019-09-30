import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san diego"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  // Call searchApi when component
  // is first rendered
  // searchApi('pasta')
  // useEffect hook runs exactly only once, because second argument '[]', tells react to only run it once.
  // REF: Chapter 97 the useEffect Hook
  useEffect(() => {
    searchApi("pasta");
  }, []);
  // return these to be referenced in SearchScreen
  // reason for this file is to extract business logic (yelp request) from SearchScreen component
  // REF: Chapter 98 Extracting hook logic
  return [searchApi, results, errorMessage];
};
