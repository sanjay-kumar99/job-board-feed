import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import JobBoard from "./pages/JobBoard";
import Bookmarks from "./pages/Bookmarks";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold p-1">Job Board</Link>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Jobs</Link>
            <Link to="/bookmarks" className="text-gray-600 hover:text-gray-900">Bookmarks</Link>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <Routes>
          <Route path="/" element={<JobBoard />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </main>
    </div>
  );
}