"use strict";(self.webpackChunkwebpack_react_test=self.webpackChunkwebpack_react_test||[]).push([[474],{4008:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".react-resizable {\\n  position: relative;\\n}\\n.react-resizable-handle {\\n  position: absolute;\\n  width: 2px;\\n  height: 100%;\\n  bottom: 0;\\n  right: -5px;\\n  cursor: col-resize;\\n  background: #dcc4c4;\\n  z-index: 999;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-react-test/./src/components/Resizeable/resizeable-table.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B2%5D!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B4%5D')},2002:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: props.children\n  });\n});\n\n//# sourceURL=webpack://webpack-react-test/./src/components/BusinessComponent/PageWarp/index.tsx?')},474:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ AntdTable)\n});\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 210 modules\nvar table = __webpack_require__(8268);\n// EXTERNAL MODULE: ./node_modules/react-resizable/index.js\nvar react_resizable = __webpack_require__(1706);\n// EXTERNAL MODULE: ./src/components/Resizeable/resizeable-table.less\nvar resizeable_table = __webpack_require__(1838);\n// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js\nvar jsx_runtime = __webpack_require__(5893);\n;// CONCATENATED MODULE: ./src/components/Resizeable/index.tsx\n// @ts-nocheck\n\n\n\n\n\nclass ResizeableTitle extends react.Component {\n  render() {\n    const {\n      onResize,\n      width,\n      onClick,\n      ...restProps\n    } = this.props;\n    if (!width) {\n      return /*#__PURE__*/(0,jsx_runtime.jsx)(\"th\", {\n        ...restProps\n      });\n    }\n    return /*#__PURE__*/(0,jsx_runtime.jsx)(react_resizable.Resizable, {\n      width: width,\n      height: 0,\n      onResizeStart: () => this.resizing = true,\n      onResizeStop: () => {\n        setTimeout(() => {\n          this.resizing = false;\n        });\n      },\n      onResize: onResize,\n      children: /*#__PURE__*/(0,jsx_runtime.jsx)(\"th\", {\n        onClick: (...args) => {\n          if (!this.resizing && onClick) {\n            onClick(...args);\n          }\n        },\n        ...restProps\n      })\n    });\n  }\n}\nclass ResizeableTable extends react.PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {\n      columns: props.columns\n    };\n  }\n  components = {\n    header: {\n      cell: ResizeableTitle\n    }\n  };\n  componentDidMount() {\n    const handlers = document.querySelectorAll('.react-resizable .react-resizable-handle');\n    handlers.forEach(handler => handler.addEventListener('click', e => {\n      return false;\n    }));\n  }\n  render() {\n    const columns = this.state.columns.map((col, index) => ({\n      ...col,\n      onHeaderCell: column => ({\n        width: column.width,\n        onResize: this.handleResize(index)\n      })\n    }));\n    const components = Object.assign({}, this.props.components, this.components);\n    return /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {\n      ...this.props,\n      scroll: {\n        x: 'max-content'\n      },\n      columns: columns,\n      components: components\n    });\n  }\n  handleResize = index => (e, {\n    size\n  }) => {\n    e.stopImmediatePropagation();\n    // e.preventDefault();\n    this.setState(({\n      columns\n    }) => {\n      const nextColumns = [...columns];\n      nextColumns[index] = {\n        ...nextColumns[index],\n        width: size.width\n      };\n      return {\n        columns: nextColumns\n      };\n    });\n  };\n}\n/* harmony default export */ const Resizeable = (ResizeableTable);\n// EXTERNAL MODULE: ./src/components/BusinessComponent/PageWarp/index.tsx\nvar PageWarp = __webpack_require__(2002);\n;// CONCATENATED MODULE: ./src/pages/AntdTable/index.tsx\n// @ts-nocheck\n\n\n\n\n\nconst data = [{\n  key: 0,\n  date: '2018-02-11',\n  amount: 120,\n  type: 'income',\n  note: 'transfer'\n}, {\n  key: 1,\n  date: '2018-03-11',\n  amount: 243,\n  type: 'income',\n  note: 'transfer'\n}, {\n  key: 2,\n  date: '2018-04-11',\n  amount: 98,\n  type: 'income',\n  note: 'transfer'\n}];\nconst columns = [{\n  title: 'Date',\n  dataIndex: 'date',\n  width: 200\n}, {\n  title: 'Amount',\n  dataIndex: 'amount',\n  width: 100\n}, {\n  title: 'Type',\n  dataIndex: 'type',\n  width: 100\n}, {\n  title: 'Note',\n  dataIndex: 'note',\n  width: 100\n}];\nconst Component = () => {\n  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PageWarp/* default */.Z, {\n    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(\"h1\", {\n      children: \" Antd Table\"\n    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Resizeable, {\n      columns: columns,\n      dataSource: data\n    })]\n  });\n};\n/* harmony default export */ const AntdTable = (Component);\n\n//# sourceURL=webpack://webpack-react-test/./src/pages/AntdTable/index.tsx_+_1_modules?")},1838:(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4008);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n    module.hot.accept(\n      4008,\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4008);\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_4_resizeable_table_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-react-test/./src/components/Resizeable/resizeable-table.less?')}}]);