// api.js
import axios from "axios";

const axiosConfig = {
  baseURL: "http:localhost://5175",
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosInstance = axios.create(axiosConfig);

export const customFetch = async ({ body = {}, path, ...config }) => {
  try {
    console.log("conf", path, config);
    const request = {
      method: "GET",
      body,
      ...config,
    };
    const { data } = await axiosInstance.request(request);
    if (data) {
      return data;
    }
    return undefined;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
