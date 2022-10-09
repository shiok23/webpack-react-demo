import React from "react";
import App from "./index";
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />)