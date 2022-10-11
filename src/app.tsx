/* eslint-disable no-undef */
import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
const container = window.document.getElementById('app')!
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<Router />)
