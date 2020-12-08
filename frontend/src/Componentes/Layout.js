import React, { useState } from 'react';
import  { Layout, Menu,  } from 'antd';
import 'antd/dist/antd.css';
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const CustomLayout = (props) => {
  const [token, setToken] = useState('');
  const userLogin = (tok) => {
    setToken(tok);
  }
    return(
        <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Cuenta
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Navegación
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Configuración
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Good Service ©2020 Created by Caso 3</Footer>
        </Layout>
      </Layout>
    )
}
export default CustomLayout
