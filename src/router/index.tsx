import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Loading from '@/components/Loading'
const BaseLayout = React.lazy(() => import('@/index'))
const Wecome = React.lazy(() => import('@/pages/Wecome'))
const NotPage = React.lazy(() => import('@/pages/404'))
const Todo = React.lazy(() => import('@/pages/Todo'))
const AntdTable = React.lazy(() => import('@/pages/AntdTable'))

export type RouterType = {
  path?: string
  label?: string
  redirect?: string
  element?: JSX.Element
  children?: RouterType[]
}
const initRouter: RouterType[] = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<Loading />}>
        <BaseLayout />
      </React.Suspense>
    ),
    children: [
      {
        path: 'wecome',
        label: '首页',
        element: (
          <React.Suspense fallback={<Loading />}>
            <Wecome />
          </React.Suspense>
        )
      },
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
    element: <NotPage />
  }
]

const router = createHashRouter(initRouter)

const routerList: any = initRouter[0].children?.map(item => {
  return {
    ...item,
    key: item.path
  }
})
export type InitRouteType = {
  key: string
  label: string
  closable: boolean
  children: JSX.Element
}
const initRoute: InitRouteType[] = [
  {
    key: 'wecome',
    label: '首页',
    closable: false,
    children: (
      <React.Suspense fallback={<Loading />}>
        <Wecome />
      </React.Suspense>
    )
  }
]

export { router, routerList, initRoute }
