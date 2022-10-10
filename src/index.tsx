import React from 'react'
import './index.less'
import Todo from './Todo/index'
import AntdTable from './AntdTable/index'
const Component: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="hello">
      <Todo />
      <AntdTable></AntdTable>
    </div>
  )
}

export default Component
