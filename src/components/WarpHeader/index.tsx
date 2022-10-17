import React, { Fragment } from 'react'
import { Layout, Space } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const { Header } = Layout

type PropsType = {
  collapsed: boolean
  changeTheme: (e: { target: { value: string } }) => void
  setCollapsed: (e: boolean) => void
}
export default (props: PropsType) => {
  const { changeTheme, setCollapsed, collapsed } = props
  return (
    <Fragment>
      <Header className="site-layout-Header">
        <Space>
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
        </Space>
      </Header>
    </Fragment>
  )
}
