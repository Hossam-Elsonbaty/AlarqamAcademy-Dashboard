import React, {useState, useContext} from 'react';
import { AppContext } from '../Context/getData';
import Button from '@mui/material/Button';
import { ConfigProvider, theme,Table } from 'antd';
export const NestedTable = () => {
  const {isApplication, isParent, handleClickOpen, applicationsData} = useContext(AppContext);
  console.log(isParent)
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
  const dataSource = Array.isArray(applicationsData) 
  ? applicationsData.map((key) => {
      if (isApplication === "studentApplications") {
        return {
          id: key._id,
          firstName: key.firstName,
          lastName: key.lastName,
          email: key.email,
          phoneNumber: key.phoneNumber,
          address: key.address,
          gender: key.gender,
          city: key.city,
          zipCode: key.zipCode,
          selectedProgram: key.selectedProgram,
        };
      } 
      else if (isApplication === "parentApplications") {
        return {
          id: key._id,
          firstName: key.firstName,
          lastName: key.lastName,
          email: key.email,
          phoneNumber: key.phoneNumber,
          address: key.address,
          city: key.city,
          zipCode: key.zipCode,
          kids: key.children?.length || 0, // Count of children
          children: key.children?.map((child) => ({
            id: child._id,
            firstName: child.firstName,
            lastName: child.lastName,
            dob: child.dob,
            gender: child.gender,
            selectedProgram: child.selectedProgram,
          })),
        };
      } 
      else if (isApplication === "contactUs") {
        return {
          id: key._id,
          name: key.name,
          message: key.message,
          email: key.email,
        };
      } else if (isApplication === "users") {
        return {
          id: key._id,
          username: key.username,
          password: key.password,
        };
      }
      return null; // For any unmatched case
    }).filter(Boolean) // Remove null entries
  : [];
  console.log(dataSource);
  const expandColumns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: {
        compare: (a, b) => a.firstName - b.firstName,
      },
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: {compare: (a, b) => a.lastName - b.lastName,},
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob',
      sorter: {compare: (a, b) => a.dob - b.dob,},
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Selected Program',
      dataIndex: 'selectedProgram',
      key: 'selectedProgram',
    },
  ];
  let columns
  if(isApplication=== "studentApplications"){
    columns = [
      {
        title: 'ID',dataIndex: 'id',key: 'id',
        sorter: {compare: (a, b) => a.id - b.id,},
      },  
      {
        title: 'First Name',dataIndex: 'firstName',key: 'firstName',
        sorter: {compare: (a, b) => a.firstName - b.firstName,},
      },  
      {
        title: 'Last Name',dataIndex: 'lastName',key: 'lastName',
        sorter: {compare: (a, b) => a.lastName - b.lastName,},
      },  
      {
        title: 'Email Address',dataIndex: 'email',key: 'email',
        sorter: {compare: (a, b) => a.email - b.email,},
      },  
      {
        title: 'Gender',dataIndex: 'gender',key: 'gender',
      },  
      {
        title: 'Phone Number',dataIndex: 'phoneNumber',key: 'phoneNumber',
      },  
      {
        title: 'Address',dataIndex: 'address',key: 'address',
      },  
      {
        title: 'City / State',dataIndex: 'city',key: 'city',
        sorter: {compare: (a, b) => a.city - b.city,},
      },  
      {
        title: 'ZipCode',dataIndex: 'zipCode',key: 'firstName',
      },  
      {
        title: 'Program',dataIndex: 'selectedProgram',key: 'selectedProgram',
      },  
    ]}
    else if (isApplication=== "parentApplications"){
      columns = [
        {
          title: 'ID',dataIndex: 'id',key: 'id',
          sorter: {compare: (a, b) => a.id - b.id,},
        },  
        {
          title: 'First Name',dataIndex: 'firstName',key: 'firstName',
          sorter: {compare: (a, b) => a.firstName - b.firstName,},
        },  
        {
          title: 'Last Name',dataIndex: 'lastName',key: 'lastName',
          sorter: {compare: (a, b) => a.lastName - b.lastName,},
        },  
        {
          title: 'Email Address',dataIndex: 'email',key: 'email',
          sorter: {compare: (a, b) => a.email - b.email,},
        },  
        {
          title: 'Phone Number',dataIndex: 'phoneNumber',key: 'phoneNumber',
        },  
        {
          title: 'Address',dataIndex: 'address',key: 'address',
        },  
        {
          title: 'City / State',dataIndex: 'city',key: 'city',
          sorter: {compare: (a, b) => a.city - b.city,},
        },  
        {
          title: 'ZipCode',dataIndex: 'zipCode',key: 'firstName',
        },  
        {
          title: 'Kids',dataIndex: 'kids',key: 'kids',
        },  
      ]
    }
    else if (isApplication=== "contactUs"){
      columns = [
        {
          title: 'ID',dataIndex: 'id',key: 'id',
        },  
        {
          title: 'Name',dataIndex: 'name',key: 'name',
          sorter: {compare: (a, b) => a.firstName - b.firstName,},
        },  
        {
          title: 'Email Address',dataIndex: 'email',key: 'email',
          sorter: {compare: (a, b) => a.firstName - b.firstName,},
        },  
      ]
    }
    else if (isApplication=== "users"){
      columns = [
        {
          title: 'ID',dataIndex: 'id',key: 'id',
        },  
        {
          title: 'Username',dataIndex: 'username',key: 'username',
          sorter: {compare: (a, b) => a.username - b.username,},
        },  
        {
          title: 'Password',dataIndex: 'password',key: 'password',
        },  
      ]
    }
  const expandedRowRender = (record) => {
    const originalRecord = dataSource.find((item) => item.id === record.id);
    return originalRecord?.children && originalRecord.children.length > 0 ? (
      <Table
        columns={expandColumns}
        dataSource={originalRecord.children}
        rowKey="id"
        pagination={false}
      />
    ) : null;
  };
  const processedData = dataSource.map(({ children, ...rest }) => rest);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return(
    <>
      {isApplication==="users"
        && 
          <Button style={{width:"fit-content"}} variant="outlined" onClick={handleClickOpen}>
            Add new user
          </Button>      
        }
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Table
          columns={columns}
          expandable={isParent?
            {
              expandedRowRender,
            }
            :false
          } 
          rowKey="id"
          dataSource={processedData}
          rowSelection={{
            ...rowSelection,
          }}
          pagination={{
            pageSize: 10,
          }}
          scroll={{
            y: 85 * 5,
            x: 2000,
          }}
        />
      </ConfigProvider>
    </>
  )
};
