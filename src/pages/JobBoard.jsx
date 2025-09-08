import React from "react";
import SearchFilterBar from "../shared/SearchFilterBar";
import JobList from "../shared/JobList";

export default function JobBoard() {
  return (
    <div>
      <SearchFilterBar />
      <JobList />
    </div>
  );
}