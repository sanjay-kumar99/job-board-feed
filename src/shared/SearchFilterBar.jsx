import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  setFilterCompany,
  setFilterLocation,
  setSortBy,
  clearFilters,
  setPerPage,
} from "../slices/jobsSlice";

export default function SearchFilterBar() {
  const dispatch = useDispatch();
  const { allJobs, search, filterCompany, filterLocation, sortBy, perPage } =
    useSelector((s) => s.jobs);

  const companies = [
    "All",
    ...Array.from(new Set(allJobs.map((j) => j.company))),
  ];
  const locations = [
    "All",
    ...Array.from(new Set(allJobs.map((j) => j.location))),
  ];

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <input
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search by title or description..."
          className="flex-1 border rounded px-3 py-2"
        />

        <select
          value={filterCompany}
          onChange={(e) => dispatch(setFilterCompany(e.target.value))}
          className="border rounded px-3 py-2"
        >
          {companies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={filterLocation}
          onChange={(e) => dispatch(setFilterLocation(e.target.value))}
          className="border rounded px-3 py-2"
        >
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="border rounded px-3 py-2"
        >
          <option value="date_desc">Newest</option>
          <option value="date_asc">Oldest</option>
          <option value="salary_desc">Highest salary</option>
          <option value="salary_asc">Lowest salary</option>
        </select>

        <select
          value={perPage}
          onChange={(e) => dispatch(setPerPage(Number(e.target.value)))}
          className="border rounded px-3 py-2"
        >
          <option value={6}>6 / page</option>
          <option value={10}>10 / page</option>
          <option value={15}>15 / page</option>
        </select>

        <button
          onClick={() => dispatch(clearFilters())}
          className="ml-auto bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
