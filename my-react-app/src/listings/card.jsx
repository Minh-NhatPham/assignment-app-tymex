import React from "react";
import { Card } from "antd";
function CardItem() {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      CardItem
    </Card>
  );
}

export default CardItem;
