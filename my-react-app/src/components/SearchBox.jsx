import { Dropdown, Input } from "antd";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import useFetch from "../hooks/useFetch";

function SearchBox({}) {
  const [search, setSearch] = useState(null);

  const { error, loading, response } = useFetch(
    { url: "/search", params: { keyword: search } },
    [search],
    { shouldFetch: search }
  );
  const dropdownItems = response
    ? response?.data.map((item) => ({
        key: item.id.toString(),
        label: (
          <a href={`#product/${item.id}`}>
            {item.name} <b>{item.price}$ </b>
          </a>
        ),
      }))
    : [];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Dropdown menu={{ items: dropdownItems }} placement={"bottom"}>
        <Input
          placeholder="Search"
          className="search-box"
          onChange={debounce(handleSearch, 1000)}
        />
      </Dropdown>
    </>
  );
}

export default SearchBox;
