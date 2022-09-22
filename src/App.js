import './App.css';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'User Name',
    dataIndex: 'username',
    key: 'username',
    sorter: (a, b) => a.username.length - b.username.length,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: ['address', 'street'],
    key: ['address', 'street'],
  },
];



function App() {

  const[users, setUsers] = useState([]);

  console.log(users);
  useEffect(() => {
    (async() => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      const response = result.data;
      setUsers(response);
    })()
  }, [])
  

  return (
    <Table dataSource={users} columns={columns} />
  );
}

export default App;
