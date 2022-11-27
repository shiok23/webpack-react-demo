import { Fragment } from 'react'
import Sider from 'antd/lib/layout/Sider'
import { Menu } from 'antd'
import { routerList } from '@/router'

type PropsType = {
  collapsed: boolean
  currentPath: string
  goRouter: (e: { key: string }) => void
}
export default (props: PropsType) => {
  const { currentPath, goRouter, collapsed } = props
  return (
    <Fragment>
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
          selectedKeys={[currentPath]}
          items={routerList}
        />
      </Sider>
    </Fragment>
  )
}
