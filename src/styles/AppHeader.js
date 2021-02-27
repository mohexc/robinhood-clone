import React from 'react';
import { Row, Col, Layout, Input } from 'antd';

const AppHeader = () => {

  return (
    <Layout.Header style={{ background: 'white', boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
      <Row justify="space-between" align="middle">
        <Col xs={4}>
          Logo
        </Col>
        <Col xs={8} style={{ display: "flex", alignItems: "center" }}>
          <Input.Search enterButton />
        </Col>
        <Col xs={12}>
          MenuItem
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default AppHeader;