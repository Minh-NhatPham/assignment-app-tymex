import { List } from "antd";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { filterItems } from "../utils/utils";
import CardItem from "./card";

function CardList({ filters }) {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);

  const { error, loading, response } = useFetch(
    { url: "/products", params: { page, skip: false } },
    [page],
    true
  );

  useEffect(() => {
    if (response) {
      setList([...list, ...response]);
    }
  }, [response]);
  const item = { title: "title", content: "content" };
  const itemjack = { title: "jack", content: "jack" };
  const itemlu = { title: "title", content: "lucy" };

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
        <>Loading</>
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
      <button onClick={handleLoadMore} disabled={loading}>
        Load more
      </button>
    </>
  );
}

export default CardList;
