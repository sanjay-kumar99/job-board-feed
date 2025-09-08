import { createSlice } from "@reduxjs/toolkit";
import jobsData from "../data/jobs.json";

const initialState = {
  allJobs: jobsData, // static JSON
  search: "",
  filterCompany: "All",
  filterLocation: "All",
  sortBy: "date_desc", // date_desc, date_asc, salary_desc, salary_asc
  bookmarks: [], // array of job ids
  page: 1,
  perPage: 6,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.page = 1;
    },
    setFilterCompany(state, action) {
      state.filterCompany = action.payload;
      state.page = 1;
    },
    setFilterLocation(state, action) {
      state.filterLocation = action.payload;
      state.page = 1;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    toggleBookmark(state, action) {
      const id = action.payload;
      if (state.bookmarks.includes(id)) {
        state.bookmarks = state.bookmarks.filter((x) => x !== id);
      } else {
        state.bookmarks.push(id);
      }
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
      state.page = 1;
    },
    clearFilters(state) {
      state.search = "";
      state.filterCompany = "All";
      state.filterLocation = "All";
      state.sortBy = "date_desc";
      state.page = 1;
    },
  },
});

export const {
  setSearch,
  setFilterCompany,
  setFilterLocation,
  setSortBy,
  toggleBookmark,
  setPage,
  setPerPage,
  clearFilters,
} = jobsSlice.actions;

export default jobsSlice.reducer;