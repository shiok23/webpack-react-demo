import { ConfigProvider, Layout, Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const { Header, Content } = Layout
import { routerList } from './router'

const Component: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const goRouter = (e: { key: string }): void => {
    navigate(e.key)
  }

  // 改变主题
  const changeTheme = (event: any) => {
    ConfigProvider.config({
      theme: {
        primaryColor: event.target.value
      }
    })
  }
  return (
    <div className="layout-warp">
      <div className="warp">
        <Sider
          className="layout-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu
            theme="light"
            onClick={goRouter}
            mode="inline"
            defaultSelectedKeys={['/']}
            items={routerList}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-Header">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed)
              }
            )}
            <div>
              切换主题
              <input
                onChange={changeTheme}
                type="color"
                placeholder="placeholder"
              />
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </div>
    </div>
  )
}

export default Component
