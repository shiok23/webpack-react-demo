import { Button } from 'antd'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './index.less'
const Component: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate()
  const goRouter = (path: string): void => {
    navigate(path)
  }
  return (
    <div className="home">
      <h1>我是测试</h1>
      <Button onClick={() => goRouter('todo')}> Todo</Button>
      <Button onClick={() => goRouter('antd-table')}> Antd-table-test</Button>
      <Outlet />
    </div>
  )
}

export default Component
