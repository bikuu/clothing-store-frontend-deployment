import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("access_token")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("access_token")
    )}`;
  }

  return req;
});

export const logIn = (data) => API.post("/login", data);

export const signUp = (data) => API.post("/register", data);

export const getUserId = (id) => API.get(`/user/${id}`);
export const getUser = () => API.get(`/user/`);
export const logoutUser = () => API.get(`/logout`);

export const getAllJobs = () => API.get("/job");
export const getJob = (id) => API.get(`/job/${id}`);
export const searchJob = (data) => API.get(`/job/search?location=${data}`);
export const deleteJob = (id) => API.delete(`/job/${id}`);
export const updateJob = (id, data) => API.put(`/job/${id}`, data);
export const createJob = (data) => API.post("/job/create", data);

export const getAllGigs = () => API.get("/workfolio");
export const getGig = (id) => API.get(`/workfolio/${id}`);
export const deleteGig = (id) => API.delete(`/workfolio/${id}`);
export const updateGig = (id, data) => API.put(`/workfolio/${id}`, data);
export const createGig = (data) => API.post("/workfolio/create", data);

export const getAllAppliedUser = () => API.get("/jobquotas");
export const applyForJob = (data) => API.post("/jobquotas/create", data);
export const updateApplyForJob = (id, data) =>
  API.put(`/jobquotas/${id}`, data);
export const deleteAppliedJob = (id) => API.delete(`/jobquotas/${id}`);
