import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import CardList from "../layout/Content/CardList";
import Sidebar from "../layout/Sidebar/Sidebar";

function SearchPage({}) {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("all");
  const onFilterChange = (filter) => {
    const newFilter = {
      [filter.key]: filter.value,
    };
    setFilters({ ...filters, ...newFilter });
  };
  const onSortChange = (sort) => {
    setSort(sort);
  };

  return (
    <Layout className="search-page">
      <Sider width={"20%"} className="left-bar-container">
        <Sidebar onFilterChange={onFilterChange} onSortChange={onSortChange} />
      </Sider>
      <Layout className="search-results-container">
        <Content style={{ padding: "12px" }}>
          <CardList filters={filters} sort={sort} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default SearchPage;
