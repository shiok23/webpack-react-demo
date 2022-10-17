import { PageHeader } from 'antd'
import { Fragment } from 'react'

type PropsType = {
  children: React.ReactNode
  [key: string]: any
}

export default (props: PropsType) => {
  const { children, ...rest } = props
  return (
    <Fragment>
      <PageHeader
        className="warp-component site-page-header-responsive"
        {...rest}
      >
        {children}
      </PageHeader>
    </Fragment>
  )
}
