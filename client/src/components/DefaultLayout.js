import '../resources/layout.css';

import React, { useState } from 'react';

import { Layout, Menu } from 'antd';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    CopyOutlined, 
    UserOutlined,
    HomeOutlined,
    UnorderedListOutlined,
    LoginOutlined,
    // VideoCameraOutlined,
  } from '@ant-design/icons';  


  const { Header, Sider, Content } = Layout;

  const DefaultLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo"><h3>Comic Fans</h3></div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={window.location.pathname}
            items={[ 
              {
                key: '/home',
                icon: <HomeOutlined />,
                label: 'Home'
             
              },
              {
                key: '/bills',
                icon: <CopyOutlined />,
                label: 'Invoices',
              },
              {
                key: '/items',
                icon: <UnorderedListOutlined />,
                label: 'Inventory',
              },
              {
                key: '/customers',
                icon: <UserOutlined />,
                label: 'Account',
              },
              {
                key: '/logout',
                icon: <LoginOutlined />,
                label: 'Sign Out',
              },
            ]}
          />  
        </Sider>
      
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 12,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '12px',
              padding: 24,
              minHeight: 280,
            }}
          >
           {props.children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default DefaultLayout;