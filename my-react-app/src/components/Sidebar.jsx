import { Select } from "antd";
import React from "react";
import useFetch from "../hooks/useFetch";
import { buildCategoriesOptions } from "../utils/utils";
import SearchBox from "./search";

function Sidebar({ onFilterChange }) {
  const { error, loading, response } = useFetch({ url: "/category" }, []);
  const handleChange = (option) => {
    const [key, value] = option.split(":");
    console.log("key,", key, value);
    onFilterChange({ key, value });
  };
  return (
    <>
      <SearchBox />
      <div>
        <span>Title</span>
        <select
          name="somethinf"
          onChange={(e) => {
            console.log("duma", e.currentTarget.name);
          }}
        >
          <option value="adu">adu</option>
          <option value="ad2">adu</option>
        </select>
      </div>
      {response?.data
        ? buildCategoriesOptions(response.data).map((options) => (
            <Select
              style={{ width: 120 }}
              defaultValue={"All"}
              options={options}
              onChange={handleChange}
            />
          ))
        : null}
    </>
  );
}

export default Sidebar;
