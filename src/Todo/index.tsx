import React, { useState } from 'react';
import Title from "./components/title"
import List from "./components/List"
import InputTodo from "./components/input"


export type listType = {
  title: string,
  del: Boolean,
  check: Boolean,
  id: string
}

type useListType = [list: Array<listType>, setList: (list: Array<listType>) => void]

const Component: React.FC = (): JSX.Element => {
  const [list, setList]: useListType = useState<listType>([])
  const handleAdd = (value: string) => {
    const oneList: listType = {
      title: value,
      del: false,
      check: false,
      id: URL.createObjectURL(new Blob()).substr(-36)
    }
    setList([oneList, ...list])
  }
  const handleDelete = (id: string) => {
    const index: number = list.findIndex(item => item.id === id)!
    list.splice(index, 1)
    setList([...list])
  }
  const handleCheck = (id: string, type?: string | undefined) => {
    const index: number = list.findIndex(item => item.id === id)!
    list[index].check = type ? false : true
    setList([...list])
  }
  return <div className="hello">
    <Title></Title>
    <InputTodo addCallback={handleAdd}></InputTodo>
    <List checkCallback={handleCheck} deleteCallback={handleDelete} list={list}></List>
  </div>
}

export default Component