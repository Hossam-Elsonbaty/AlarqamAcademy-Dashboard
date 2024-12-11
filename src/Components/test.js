import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';

const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];

// Mocking JSON data from the backend
const backendData = [
  {
    id: "675723d9b6d0a9753eb0b8cd",
    firstName: "hossam",
    lastName: "sadasd",
    email: "asdasd@asda.com",
    phoneNumber: "65165498",
    address: "asdasdas",
    city: "asdasda",
    zipCode: 32423,
    kids: 1,
    children: [
      {
        id: "675723d9b6d0a9753eb0b8ce",
        firstName: "asds",
        lastName: "asdas",
        dob: "2024-12-10",
        gender: "Female",
        selectedProgram: "Step One in the Quran Journey",
      },
    ],
  },
  {
    id: "67574017683ee2bab1a28026",
    firstName: "zain",
    lastName: "saud",
    email: "zain@g.com",
    phoneNumber: "1326546",
    address: "hljljl",
    city: "sohag",
    zipCode: 32165,
    kids: 1,
    children: [
      {
        id: "67574017683ee2bab1a28027",
        firstName: "khadiga",
        lastName: "zain",
        dob: "2019-05-08",
        gender: "Female",
        selectedProgram: "Step One in the Quran Journey",
      },
    ],
  },
  {
    id: "6758a8895fad2e715c68285a",
    firstName: "Ali",
    lastName: "saad",
    email: "ali@g.com",
    phoneNumber: "123456",
    address: "ssasd",
    city: "latvia",
    zipCode: 23123,
    kids: 2,
    children: [
      {
        id: "6758a8895fad2e715c68285b",
        firstName: "sadasda",
        lastName: "asdsda",
        dob: "2019-02-05",
        gender: "Male",
        selectedProgram: "Hoffaz Dar Al-Arqam (Memorization)",
      },
      {
        id: "6758a8895fad2e715c68285c",
        firstName: "sasasd",
        lastName: "assdasdasd",
        dob: "2019-01-08",
        gender: "Male",
        selectedProgram: "Step One in the Quran Journey",
      },
    ],
  },
];

// Define columns for the expanded table (children)
const expandColumns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Date of Birth',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Program',
    dataIndex: 'selectedProgram',
    key: 'selectedProgram',
  },
];

// Define main table columns
const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Number of Kids',
    dataIndex: 'kids',
    key: 'kids',
  },
];

// Expanded row renderer to display children information
const expandedRowRender = (record) => {
  const originalRecord = backendData.find((item) => item.id === record.id);
  return originalRecord?.children && originalRecord.children.length > 0 ? (
    <Table
      columns={expandColumns}
      dataSource={originalRecord.children}
      rowKey="id"
      pagination={false}
    />
  ) : null;
};

// Processed data for the main table (excluding children field)
const processedData = backendData.map(({ children, ...rest }) => rest);

const Test = () => (
  <>
    <Table
      columns={columns}
      expandable={{
        expandedRowRender,
      }}
      dataSource={processedData}
      rowKey="id"
    />
  </>
);

export default Test;