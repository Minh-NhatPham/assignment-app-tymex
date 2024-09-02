import { List } from "antd";
import React, { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import CardItem from "./card";

const refreshTime = 10000;

function CardList({ filters }) {
  console.log("refresh cardlist");
  const item = { title: "title", content: "content" };
  const itemjack = { title: "jack", content: "jack" };

  const itemlu = { title: "title", content: "lucy" };

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    // const setupRefreshData = setInterval(() => {
    //   customFetch({ url: "/products", params: { page: page, skip: false } });
    // }, refreshTime);
    // return () => clearInterval(setupRefreshData);
  }, [page]);

  useEffect(() => {
    if (!data) {
      setLoading(true);
      customFetch({ url: "/products", params: { page: page, skip: false } }).then((response) => {
        setData(response.data);
        setLoading(false);
      });
    }
  }, []);

  const listItems = [
    item,
    item,
    item,
    item,
    itemjack,
    itemjack,
    item,
    itemlu,
    itemlu,
    itemlu,
    itemlu,
  ];
  function filterItems(items, filters) {
    return items.filter((item) => {
      return Object.keys(filters).every((key) => {
        if (filters[key] === "all") {
          return item[key];
        }
        return item[key] === filters[key];
      });
    });
  }
  const handleLoadMore = async (e) => {
    e.preventDefault();
    setPage((p) => p + 1);
    setLoading(true);
    const { data } = await customFetch({
      url: "/products",
      params: { page: page + 1, skip: true },
    }); //TODO: update custom fetch to call API
    if (data) {
      setData(data);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <>ccc</>
      ) : (
        <>
          <List
            grid={{
              gutter: 8,
              column: 3,
            }}
            dataSource={filterItems(listItems, filters)}
            renderItem={(item) => {
              return (
                <List.Item>
                  <CardItem title={item.title} content={item.content} />
                </List.Item>
              );
            }}
          />
          <button onClick={handleLoadMore} disabled={loading}>
            Load more
          </button>
        </>
      )}
    </>
  );
}

export default CardList;
