import React from "react";
import { Card } from "antd";
function CardItem({ item }) {
  const { name, description, price, img } = item;
  return (
    <Card hoverable cover={<img alt="example" src={img} />}>
      <span>{name}</span>
      <div className="card-item__price">
        <span>Price:</span>
        <b>Only {price}$</b>
      </div>
      <div className="card-item__description">{description}</div>
    </Card>
  );
}

export default CardItem;
