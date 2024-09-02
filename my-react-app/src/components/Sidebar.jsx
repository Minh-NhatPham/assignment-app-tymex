import { Select } from "antd";
import React from "react";
import SearchBox from "./search";

function Sidebar({ onFilterChange }) {
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
        <Select
          defaultValue="title:all"
          style={{
            width: 120,
          }}
          name
          onChange={handleChange}
          options={[
            {
              value: "title:all",
              label: "All",
            },
            {
              value: "title:jack",
              label: "Jack",
            },
            {
              value: "title:lucy",
              label: "Lucy",
            },
          ]}
        />
      </div>
      <div>
        <span>name</span>
        <Select
          defaultValue="content:all"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "content:all",
              label: "All",
            },
            {
              value: "content:jack",
              label: "Jack",
            },
            {
              value: "content:lucy",
              label: "Lucy",
            },
          ]}
        />
      </div>
    </>
  );
}

export default Sidebar;
