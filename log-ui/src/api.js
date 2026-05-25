import axios from "axios";

// create reusable instance
const API = axios.create({
  baseURL: "https://log-tracker-q2ly.onrender.com",
});

// GET logs with filters
export const getLogs = async (filters = {}) => {
  try {
    const response = await API.get("/data", {
      params: filters, // ?level=ERROR&service=auth
    });
    return { data: response.data };
  } catch (error) {
    console.error("Error fetching logs:", error);
    return { data: [] };
  }
};

// AI analysis
export const analyzeLogs = async () => {
  try {
    const response = await API.get("/logs/analyze");
    return { data: response.data };
  } catch (error) {
    console.error("Error analyzing logs:", error);
    return { data: "Analysis failed" };
  }
};