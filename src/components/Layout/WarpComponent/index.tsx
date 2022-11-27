import { Fragment, useEffect, useRef, useState } from 'react'
import { Tabs } from 'antd'
import React from 'react'
import { routerList, RouterType, initRoute } from '@/router'
import { useLocation, useNavigate } from 'react-router-dom'

type PropsType = {
  children?: React.ReactNode
  [key: string]: any
}

export default (props: PropsType) => {
  const { children, ...rest } = props
  const location = useLocation()
  const navigate = useNavigate()
  const [activeKey, setActiveKey] = useState(initRoute[0].key)
  const [items, setItems] = useState(initRoute)
  useEffect(() => {
    const key = location.pathname
    const routerItem = routerList.find(
      (route: RouterType) => `/${route.path}` === key
    )
    if (!routerItem) return
    setActiveKey(routerItem.key)
    if (items.find(route => `/${route.key}` === key)) return
    setItems([
      ...items,
      {
        key: routerItem.key,
        label: routerItem.label,
        closable: true,
        children: routerItem.element
      }
    ])
  }, [location])

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey)
    navigate(newActiveKey)
  }

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
}
