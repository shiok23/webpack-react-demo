import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../index'
import Todo from '../pages/Todo'
import AntdTable from '../pages/AntdTable'

export default function Router() {
  {
    /* 所有的路由配置均在 BrowserRouter 内部 */
  }
  return (
    <HashRouter>
      {/* 使用 Routes 替换曾经的 Switch */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="todo" element={<Todo />} />
          <Route path="antd-table" element={<AntdTable />} />
          {/* 重定向到首页 */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  )
}
