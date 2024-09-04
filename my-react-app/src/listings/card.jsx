import React from "react";
import { Card } from "antd";
function CardItem({ item }) {
  const { name, description, price } = item;
  return (
    <Card
      hoverable
      style={{
        width: "30%",
      }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <span>{name}</span>
      <div style={{ display: "flex" }}>
        <span>Price:</span>
        <b>Only {price}$</b>
      </div>
      <div className="card-item__description">{description}</div>
    </Card>
  );
}

export default CardItem;
