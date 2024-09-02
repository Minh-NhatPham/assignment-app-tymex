import { List } from "antd";
import React from "react";
import CardItem from "./card";

function CardList() {
  const item = { title: "title", content: "content" };
  const listItems = [item, item, item, item, item];

  return (
    <List
      grid={{
        gutter: 8,
        column: 3,
      }}
      dataSource={listItems}
      renderItem={(item) => (
        <List.Item>
          <CardItem title={item.title} content={item.content} />;
        </List.Item>
      )}
    />
  );
}

export default CardList;
