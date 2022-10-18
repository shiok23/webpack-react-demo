import { ConfigProvider, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import WarpComponent from '@/components/WarpComponent'
import WarpMenu from '@/components/WarpMenu'
import WarpHeader from '@/components/WarpHeader'

const Component: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [currentPath, setCurrentPath] = useState<string>('/')

  // 处理刷新页面重定向 menu key
  useEffect(() => {
    setCurrentPath(location.pathname.slice(1, location.pathname.length))
  }, [])

  // 路由跳转
  const goRouter = (e: { key: string }): void => {
    setCurrentPath(e.key)
    navigate(e.key)
  }

  // 改变主题
  const changeTheme = (event: { target: { value: string } }) => {
    ConfigProvider.config({
      theme: {
        primaryColor: event.target.value
      }
    })
  }

  return (
    <div className="layout-warp">
      <div className="warp">
        {/* menu */}
        <WarpMenu
          goRouter={goRouter}
          currentPath={currentPath}
          collapsed={collapsed}
        ></WarpMenu>
        <Layout className="site-layout">
          {/* headers */}
          <WarpHeader
            changeTheme={changeTheme}
            setCollapsed={setCollapsed}
            collapsed={collapsed}
          ></WarpHeader>
          {/* content */}
          <WarpComponent>
            <Outlet />
          </WarpComponent>
        </Layout>
      </div>
    </div>
  )
}

export default Component
