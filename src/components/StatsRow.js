import { Row, Col } from 'antd'
import React from 'react'
import ImagStock from "../asset/stock.svg"

const StatsRow = ({ name, openPrice, price, }) => {
  const percentage = ((price - openPrice) / openPrice) * 100;

  return (
    <Row style={{ borderBottom: "1px solid black" }}>
      <Col span={8}>
        <h1>{name}</h1>
      </Col>
      <Col span={8} className="row__chart">
        <img src={ImagStock} alt="" height={16} />
      </Col>
      <Col span={8} className="row__numbers">
        <small className="row__price">{price}</small><br />
        <small className="row__percentage"> {Number(percentage).toFixed(2)}%</small>
      </Col>
    </Row>
  )
}

export default StatsRow
