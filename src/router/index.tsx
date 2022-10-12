// @ts-nocheck
import { createHashRouter } from 'react-router-dom'
import Home from '../index'
import Todo from '../pages/Todo'
import AntdTable from '../pages/AntdTable'

const initRouter = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'todo',
        label: '代办事项',
        element: <Todo />
      },
      {
        path: 'antd-table',
        label: '表格',
        element: <AntdTable />
      }
    ]
  },
  {
    path: '*',
    element: <Home />
  }
]
const router = createHashRouter(initRouter)

const routerList: any = initRouter[0].children?.map(item => {
  return {
    ...item,
    key: item.path
  }
})
export { router, routerList }
