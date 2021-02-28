import React from 'react';
import { Layout, Row, Col } from 'antd';
import AppHeader from './AppHeader';
import NewFeed from '../components/NewFeed';
import Stats from '../components/Stats';
// import AppFooter from './AppFooter';
// import AppSider from './AppSider';

const AppLayout = () => {

  return (
    <Layout style={{ height: '100vh' }}>
      {/* <AppSider /> */}
      <Layout>
        <AppHeader />
        <Layout.Content style={{ height: '100%' }}>
          <Row>
            <Col xs={16} style={{ padding: "1rem" }}>
              <NewFeed />
            </Col>
            <Col xs={8} style={{ padding: "1rem" }}>
              <Stats />

            </Col>
          </Row>

        </Layout.Content>
        {/* <AppFooter /> */}
      </Layout>
    </Layout>
  );
}

export default AppLayout;