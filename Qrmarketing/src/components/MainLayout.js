import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Space } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  AppstoreOutlined,
  GroupOutlined,
  UnorderedListOutlined,
  ProductOutlined,
  UserOutlined,
  HomeOutlined,
  ProfileOutlined,
  BarcodeOutlined,
  FileTextOutlined,
  LineChartOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: 'products',
      icon: <ProductOutlined />,
      label: '产品',
      children: [
        {
          key: '/products',
          icon: <AppstoreOutlined />,
          label: '产品类别',
        },
        {
          key: '/product-groups',
          icon: <GroupOutlined />,
          label: '产品参数分组',
        },
        {
          key: '/product-categories',
          icon: <UnorderedListOutlined />,
          label: '产品参数设置',
        },
        {
          key: '/product-management',
          icon: <BarcodeOutlined />,
          label: '产品管理',
        },
      ],
    },
    {
      key: 'supply',
      icon: <ProfileOutlined />,
      label: '供应网',
    },
    {
      key: 'verification',
      icon: <BarcodeOutlined />,
      label: '扫码网',
    },
    {
      key: 'warehouse',
      icon: <FileTextOutlined />,
      label: '仓库',
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: '用户',
    },
    {
      key: 'organization',
      icon: <GroupOutlined />,
      label: '组织',
    },
    {
      key: 'system',
      icon: <SettingOutlined />,
      label: '系统',
    },
  ];

  const userMenuItems = [
    {
      key: 'profile',
      label: '个人资料',
      icon: <UserOutlined />,
    },
    {
      key: 'settings',
      label: '设置',
      icon: <SettingOutlined />,
    },
    {
      key: 'logout',
      label: '退出登录',
      icon: <LogoutOutlined />,
    },
  ];

  const handleMenuClick = (e) => {
    if (e.key.startsWith('/')) {
      navigate(e.key);
    }
  };

  const handleUserMenuClick = (e) => {
    if (e.key === 'logout') {
      console.log('Logout');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        width={200}
        style={{
          background: '#001529',
        }}
      >
        <div className="logo" style={{ 
          height: 32, 
          margin: 16, 
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold'
        }}>
          {collapsed ? 'QR' : '营销追溯系统'}
        </div>
        <Menu
          theme="dark"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: '0 24px', 
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <div style={{ fontSize: 20, fontWeight: 500 }}>
            营销追溯系统
          </div>
          <Space size={24}>
            <span>产品 > 产品类别</span>
            <Dropdown
              menu={{ 
                items: userMenuItems,
                onClick: handleUserMenuClick 
              }}
              placement="bottomRight"
            >
              <Space style={{ cursor: 'pointer' }}>
                <Avatar icon={<UserOutlined />} />
                <span>孙会清</span>
              </Space>
            </Dropdown>
          </Space>
        </Header>
        <Content style={{ margin: '24px', background: '#f0f2f5', minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;