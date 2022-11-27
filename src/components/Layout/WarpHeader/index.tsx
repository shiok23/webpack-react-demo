import React from 'react'
import { Button, Layout, Space } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import styles from './styles.module.less'

const { Header } = Layout

type PropsType = {
  collapsed: boolean
  changeTheme: (e: { target: { value: string } }) => void
  updateTheme: () => void
  setCollapsed: (e: boolean) => void
}
export default (props: PropsType) => {
  const { changeTheme, setCollapsed, collapsed, updateTheme } = props
  return (
    <div className="layout-warp-header">
      <Header className="site-layout-Header">
        <Space>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed)
            }
          )}
          <div className={styles.theme}>
            选择主题颜色
            <input
              onChange={changeTheme}
              type="color"
              placeholder="placeholder"
            />
            <Button onClick={() => updateTheme()}>切换主题</Button>
          </div>
        </Space>
      </Header>
    </div>
  )
}
