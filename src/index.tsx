import { ConfigProvider, Layout } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import WarpComponent from '@/components/Layout/WarpComponent'
import WarpMenu from '@/components/Layout/WarpMenu'
import WarpHeader from '@/components/Layout/WarpHeader'

const Component: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  const ref = useRef<{
    routerChange: () => void
  }>(null)
  const key: string =
    location.pathname.slice(1, location.pathname.length) || 'wecome'
  const keyList: string[] = key.split('/')
  const assembleKey: string = keyList[keyList.length - 1]
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [currentPath, setCurrentPath] = useState<string>(assembleKey)
  const [themeColor, setThemeColor] = useState<string>('')
  const [selectColor, setSelectColor] = useState<string>('')
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>(
    keyList.filter((key: string) => key !== assembleKey)
  )
  useEffect(() => {
    setCurrentPath(location.pathname.slice(1))
    if (ref?.current) {
      ref?.current?.routerChange()
    }
  }, [location])
  // 处理刷新页面重定向 menu key
  useEffect(() => {
    navigate(key)
  }, [])

  // 路由跳转
  const goRouter = (e: { key: string; keyPath: string[] }): void => {
    setCurrentPath(e.key)
    navigate(e.key)
  }

  // 选择的颜色
  const changeTheme = (event: { target: { value: string } }) => {
    setSelectColor(event.target.value)
  }

  // 改变主题
  const updateTheme = () => {
    if (selectColor === themeColor) return
    setThemeColor(selectColor)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeColor
        }
      }}
    >
      <div className="layout-warp">
        <div className="warp">
          {/* menu */}
          <WarpMenu
            goRouter={goRouter}
            defaultOpenKeys={defaultOpenKeys}
            currentPath={currentPath}
            collapsed={collapsed}
          ></WarpMenu>
          <Layout className="site-layout">
            {/* headers */}
            <WarpHeader
              changeTheme={changeTheme}
              updateTheme={updateTheme}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
            ></WarpHeader>
            {/* content */}
            <WarpComponent ref={ref}></WarpComponent>
          </Layout>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Component
