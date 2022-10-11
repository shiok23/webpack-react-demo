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
    <div className="hello">
      <h1>我是 home</h1>
      <Button onClick={() => goRouter('todo')}> Todo</Button>
      <Button onClick={() => goRouter('antd-table')}> Antd-table</Button>
      <Outlet />
    </div>
  )
}

export default Component
