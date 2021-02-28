import React from 'react';
import { Row, Col, Layout, Input } from 'antd';
import logo from "../asset/robinhood.svg"

const AppHeader = () => {

  return (
    <Layout.Header style={{ background: 'darkBule', boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
      <Row justify="space-between" align="middle">
        <Col xs={4}>
          <img src={logo} width={25} alt="" />
        </Col>
        <Col xs={8} style={{ display: "flex", alignItems: "center" }}>
          <Input.Search enterButton />
        </Col>
        <Col xs={12}>
          <Row justify="space-around" style={{ color: 'white', fontWeight: "bold" }}>
            <a href="/">Free Stocks</a>
            <a href="/">Portfolio</a>
            <a href="/">Cash</a>
            <a href="/">Messages</a>
            <a href="/">Account</a>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default AppHeader;