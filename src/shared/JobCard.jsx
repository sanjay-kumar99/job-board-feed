import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../slices/jobsSlice";

export default function JobCard({ job }) {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((s) => s.jobs);
  const bookmarked = bookmarks.includes(job.id);

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:justify-between">
      <div>
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <div className="text-sm text-gray-600">
          {job.company} • {job.location}
        </div>
        <div className="text-sm text-gray-700 mt-2">{job.description}</div>
      </div>

      <div className="mt-4 md:mt-0 md:text-right flex flex-col items-start md:items-end">
        <div className="text-sm text-gray-600">
          ₹{(job.salary / 100000).toFixed(2)} LPA
        </div>
        <div className="text-sm text-gray-500">
          {new Date(job.postedAt).toLocaleDateString()}
        </div>

        <div className="mt-3 flex space-x-2">
          <button
            onClick={() => dispatch(toggleBookmark(job.id))}
            className={`px-3 py-1 rounded border ${
              bookmarked ? "bg-yellow-400" : "bg-white"
            }`}
          >
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </button>

          <a
            href="#apply"
            className="px-3 py-1 rounded border bg-blue-600 text-white"
            onClick={(e) => {
              e.preventDefault();
              alert(`Simulated apply flow for: ${job.title}`);
            }}
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
