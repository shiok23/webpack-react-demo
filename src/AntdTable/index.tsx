import React from 'react';
import ResizeableTable from "../../components/Resizeable/index";


const data = [
  {
    key: 0,
    date: "2018-02-11",
    amount: 120,
    type: "income",
    note: "transfer"
  },
  {
    key: 1,
    date: "2018-03-11",
    amount: 243,
    type: "income",
    note: "transfer"
  },
  {
    key: 2,
    date: "2018-04-11",
    amount: 98,
    type: "income",
    note: "transfer"
  }
];


const columns = [
  {
    title: "Date",
    dataIndex: "date",
    width: 200,
    sorter: (a, b) => a.date.length - b.date.length,
    sortDirections: ["descend"]
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 100,
    sorter: (a, b) => {
      console.log("Amount sort");
      return a.amount - b.amount;
    },
    sortDirections: ["descend"]
  },
  {
    title: "Type",
    dataIndex: "type",
    width: 100
  },
  {
    title: "Note",
    dataIndex: "note",
    width: 100
  },
  {
    title: "Action",
    key: "action",
    render: () => <a href="javascript:;">Delete</a>
  }
];

const Component: React.FC = (): React.Element => {

  return <div >
    <h1> Antd Table</h1>
    <ResizeableTable
      columns={columns}
      dataSource={data}
    />
  </div>
}

export default Component