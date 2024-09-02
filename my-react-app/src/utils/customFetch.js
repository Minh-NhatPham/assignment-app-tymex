import axios from "axios";

const baseURL = "http://localhost:5175";

const axiosConfig = {
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosInstance = axios.create(axiosConfig);

export const customFetch = async ({ body = {}, url = "", ...config }) => {
  try {
    const request = {
      method: "GET",
      body,
      url,
      ...config,
    };
    const { data } = await axiosInstance.request(request);
    if (data) {
      return data;
    }
    return undefined;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
