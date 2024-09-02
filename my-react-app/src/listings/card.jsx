import React from "react";
import { Card } from "antd";
function CardItem({ title, description }) {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      {title}
      <span>{description}</span>
    </Card>
  );
}

export default CardItem;
