import React from "react";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "./JobCard";
import { setPage } from "../slices/jobsSlice";

export default function JobList() {
  const dispatch = useDispatch();
  const {
    allJobs,
    search,
    filterCompany,
    filterLocation,
    sortBy,
    page,
    perPage,
  } = useSelector((s) => s.jobs);

  // Filtering
  const filtered = allJobs
    .filter((j) => {
      if (filterCompany !== "All" && j.company !== filterCompany) return false;
      if (filterLocation !== "All" && j.location !== filterLocation)
        return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          j.title.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .slice(); // copy

  // Sorting
  filtered.sort((a, b) => {
    if (sortBy === "date_desc") {
      return new Date(b.postedAt) - new Date(a.postedAt);
    }
    if (sortBy === "date_asc") {
      return new Date(a.postedAt) - new Date(b.postedAt);
    }
    if (sortBy === "salary_desc") {
      return b.salary - a.salary;
    }
    if (sortBy === "salary_asc") {
      return a.salary - b.salary;
    }
    return 0;
  });

  // Pagination
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {paginated.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {start + 1} - {Math.min(start + perPage, total)} of {total}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => dispatch(setPage(Math.max(1, page - 1)))}
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={page === 1}
          >
            Prev
          </button>

          {Array.from({ length: pages }).map((_, idx) => {
            const p = idx + 1;
            return (
              <button
                key={p}
                onClick={() => dispatch(setPage(p))}
                className={`px-3 py-1 border rounded ${
                  p === page ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                {p}
              </button>
            );
          })}

          <button
            onClick={() => dispatch(setPage(Math.min(pages, page + 1)))}
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={page === pages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
