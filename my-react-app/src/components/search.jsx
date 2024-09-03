import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import useFetch from "../hooks/useFetch";
// TODO: add search icon infront search inputaddonBefore={<SearchOutlined />}
function SearchBox({}) {
  const [search, setSearch] = useState(null);
  const [initFetch, setInitFetch] = useState(false);

  const { error, loading, response } = useFetch(
    { url: "/search", params: { keyword: search } },
    [search],
    { shouldFetch: initFetch }
  );

  useEffect(() => {
    setInitFetch(true);
  }, []);

  const handleSearch = (e) => {
    const searchKeyword = e.target.value;
    setSearch(searchKeyword);
  };
  return (
    <Input
      placeholder="Search"
      className="search-box"
      onChange={debounce(handleSearch, 1000)}
      onKeyDown={(e) => {
        console.log(e);
      }}
    />
  );
}

export default SearchBox;
