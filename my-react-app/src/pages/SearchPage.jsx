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
  console.log("new filt", filters);
  return (
    <div>
      <Sider width="20%">
        <Sidebar onFilterChange={onFilterChange} />
      </Sider>
      <Layout>
        <Content style={{ padding: "12px" }}>
          <CardList filters={filters} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default SearchPage;
