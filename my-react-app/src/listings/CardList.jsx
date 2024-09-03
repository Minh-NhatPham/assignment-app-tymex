import { List, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { AUTO_REFRESH_API } from "../constants";
import useFetch from "../hooks/useFetch";
import { customFetch } from "../utils/customFetch";
import { filterItems } from "../utils/utils";
import CardItem from "./card";

function CardList({ filters }) {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const timerRef = useRef();

  const { error, loading, response } = useFetch({ url: "/products", params: { page } }, [page], {
    autoRefresh: true,
    shouldFetch: true,
  });

  useEffect(() => {
    if (response) {
      const { data, totalPage } = response;
      setList([...list, ...data]);
      if (totalPage <= page) {
        setShowLoadMore(false);
      }
    }
  }, [response]);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(async () => {
      const data = await customFetch({ url: "/products", params: { page, refresh: true } });
      setData(data);
    }, AUTO_REFRESH_API);
    return () => clearInterval(timerRef.current);
  }, [page]);

  const handleLoadMore = async (e) => {
    e.preventDefault();
    setPage((p) => p + 1);
  };
  if (error) {
    return <>Error 404</>;
  }
  return (
    <>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <List
            grid={{
              gutter: 8,
              column: 3,
            }}
            dataSource={filterItems(list, filters)}
            renderItem={(item) => {
              return (
                <List.Item>
                  <CardItem title={item.name} description={item.description} />
                </List.Item>
              );
            }}
          />
        </>
      )}
      {showLoadMore ? (
        <button onClick={handleLoadMore} disabled={loading}>
          Load more
        </button>
      ) : (
        <>You've seen all the products</>
      )}
    </>
  );
}

export default CardList;
