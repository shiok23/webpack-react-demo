// @ts-nocheck
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from '../components/Loading'
const Home = React.lazy(() => import('../index'))
const Todo = React.lazy(() => import('../pages/Todo'))
const AntdTable = React.lazy(() => import('../pages/AntdTable'))
const initRouter = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    ),
    children: [
      {
        path: 'todo',
        label: '代办事项',
        element: (
          <React.Suspense fallback={<Loading />}>
            <Todo />
          </React.Suspense>
        )
      },
      {
        path: 'antd-table',
        label: '表格',
        element: (
          <React.Suspense fallback={<Loading />}>
            <AntdTable />
          </React.Suspense>
        )
      }
    ]
  },
  {
    path: '*',
    element: <Home />
  }
]
const router = createBrowserRouter(initRouter)

const routerList: any = initRouter[0].children?.map(item => {
  return {
    ...item,
    key: item.path
  }
})
export { router, routerList }
