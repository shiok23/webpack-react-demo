import React, { useState } from 'react';
import "./index.less"


const Component = () => {
  const [num, setNum] = useState('1')
  return <div className="hello">
    hello d1m zejia
    <div>{num}</div>
  </div>
}

export default Component