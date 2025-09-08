import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../shared/JobCard";

export default function Bookmarks() {
  const { allJobs, bookmarks } = useSelector((s) => s.jobs);
  const bookmarkedJobs = allJobs.filter((j) => bookmarks.includes(j.id));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Bookmarked Jobs</h2>
      {bookmarkedJobs.length === 0 ? (
        <div className="text-gray-600">No bookmarks yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {bookmarkedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}