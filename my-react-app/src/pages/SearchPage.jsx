import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import CardList from "../listings/CardList";

function SearchPage({}) {
  const [filters, setFilters] = useState({});
  const onFilterChange = (filter) => {
    console.log("eee", filter);
    const newFilter = {
      [filter.key]: filter.value,
    };
    setFilters({ ...filters, ...newFilter });
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sider style={{ midWidth: "25%" }} className="left-bar-container">
        <Sidebar onFilterChange={onFilterChange} />
      </Sider>
      <Layout className="search-results-container">
        <Content style={{ padding: "12px" }}>
          <CardList filters={filters} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default SearchPage;
