import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppSider from './AppSider';

const AppLayout = () => {

  return (
    <Layout style={{ height: '100vh' }}>
      <AppSider />
      <Layout>
        <AppHeader />
        <Layout.Content style={{ height: '100%' }}>

        </Layout.Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default AppLayout;