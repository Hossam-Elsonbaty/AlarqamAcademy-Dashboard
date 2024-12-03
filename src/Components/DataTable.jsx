import React, {useContext, useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { AppContext } from '../Context/getData';

let columns 
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const paginationModel = { page: 0, pageSize: 10 };
export const DataTable=()=> {
  const {contactData, applicationsData, isApplication} = useContext(AppContext);
  isApplication? columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'email', headerName: 'Email address', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone number', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'city', headerName: 'City / state', width: 130 },
    { field: 'zipCode', headerName: 'Zip Code', width: 130 },
    { field: 'selectedProgram', headerName: 'Selected program', width: 130 },
  ]: columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    { field: 'email', headerName: 'Email address', width: 250 },
    { field: 'message', headerName: 'Message', width: "100%" },
  ]
  const testRows = applicationsData&&applicationsData.map((key,index)=>{
    const birthDate = new Date(key.dob);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    let dataObj
    isApplication?  dataObj = {
      id:key._id,firstName:key.firstName,
      lastName: key.lastName, age:calculatedAge,
      email: key.email, phoneNumber: key.phoneNumber,
      gender: key.gender, address: key.address,
      city: key.city, zipCode: key.zipCode,
      selectedProgram: key.selectedProgram
    }
    : dataObj = {
      id:key._id,name:key.name,
      email: key.email, message: key.message,
    }
    return dataObj
  }) 
  return (
    <Paper sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={testRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
