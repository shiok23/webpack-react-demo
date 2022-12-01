import { Fragment, forwardRef, useState, useImperativeHandle } from 'react'
import { Tabs } from 'antd'
import React from 'react'
import { deepFlatRouter, RouterType, initRoute, InitRouteType } from '@/router'
import { useLocation, useNavigate } from 'react-router-dom'

type PropsType = {
  children?: React.ReactNode
  [key: string]: any
}

export default forwardRef((props: PropsType, ref) => {
  const { children, ...rest } = props
  const location = useLocation()
  const navigate = useNavigate()
  const [activeKey, setActiveKey] = useState<string>(initRoute[0].key)
  const [items, setItems] = useState<InitRouteType[]>(initRoute)

  // 对外暴露 routerChange 方法
  useImperativeHandle(ref, () => ({
    routerChange
  }))

  const routerChange = () => {
    const key = location.pathname
    const routerItem = deepFlatRouter.find(
      (route: RouterType) => `/${route.path}` === key
    )
    if (!routerItem) return
    setActiveKey(routerItem.key)
    if (items.find(route => `/${route.key}` === key)) return
    setItems([
      ...items,
      {
        key: routerItem.key,
        label: routerItem.menuLabel || routerItem.label,
        closable: true,
        children: routerItem.element
      }
    ])
  }

  // 标签页切换
  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey)
    navigate(newActiveKey)
  }

  // 删除页签
  const onEdit = (e: React.MouseEvent | React.KeyboardEvent | string) => {
    const newItems = items.filter(item => item.key !== e)
    const lastkey = newItems[newItems.length - 1].key
    setItems(newItems)
    setActiveKey(lastkey)
    navigate(lastkey)
  }

  return (
    <Fragment>
      <div className="warp-component site-page-header-responsive" {...rest}>
        <Tabs
          type="editable-card"
          hideAdd
          onChange={onChange}
          onEdit={onEdit}
          activeKey={activeKey}
          items={items}
        />
      </div>
    </Fragment>
  )
})
