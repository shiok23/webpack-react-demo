import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import 'antd/dist/antd.variable.min.css' // or 'antd/dist/antd.less'
import './index.less'

const container = window.document.getElementById('app')!
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <ConfigProvider>
    <RouterProvider router={router} />
  </ConfigProvider>
)
