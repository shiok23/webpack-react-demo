import React, { useState } from 'react'
type propsHelper = {
  addCallback: Function
}
interface BaseSyntheticEvent<E = object, C = any, T = any> {
  nativeEvent: E
  currentTarget: C
  target: T
  bubbles: boolean
  keyCode?: number
  cancelable: boolean
  defaultPrevented: boolean
  eventPhase: number
  isTrusted: boolean
  preventDefault(): void
  isDefaultPrevented(): boolean
  stopPropagation(): void
  isPropagationStopped(): boolean
  persist(): void
  timeStamp: number
  type: string
}
const Component: React.FC = (props: propsHelper): React.Element => {
  const { addCallback }: propsHelper = props
  const [value, setValue] = useState('')
  const handleAdd = () => {
    if (!value) return
    parentCb()
  }

  const parentCb = (): void => {
    addCallback(value)
    setValue('')
  }
  const handleKeyDown = (e: BaseSyntheticEvent) => {
    if (e.keyCode! === 13) {
      parentCb()
    }
  }

  const handleChange = (e: BaseSyntheticEvent) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} />{' '}
      <button onClick={handleAdd}>添加</button>
    </>
  )
}

export default Component
