import React from 'react';
import "./index.less"
import Todo from "./Todo/index"

const Component: React.FunctionComponent = (): React.Element => {
  return <div className="hello">
    <Todo />
  </div>
}

export default Component