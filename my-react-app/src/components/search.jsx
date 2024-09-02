import { Input } from "antd";
import React, { useState } from "react";

// TODO: add search icon infront search inputaddonBefore={<SearchOutlined />}
function SearchBox({}) {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <Input
      placeholder="Search"
      className="search-box"
      onChange={handleSearch}
      onKeyDown={(e) => {
        console.log(e);
      }}
    />
  );
}

export default SearchBox;
