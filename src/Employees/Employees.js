import React from 'react'
import EmployeeForm from './EmployeeForm';
import PageHeader from '../components/PageHeader'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import UseTable from '../components/UseTable';
import * as empService from "../Services/EmployeeService";
import { useState } from 'react';

const headCells = [
  {id:'fullName',label:'Employee Name'},
  {id:'email',label:'Email Address (Personal)'},
  {id:'mobile',label:'Mobile Number'},
  {id:'department',label:'Department',disableSorting:true},
]

const useStyles = makeStyles(theme =>({
    pageContent:{
      margin:theme.spacing(5),
      padding: theme.spacing(3)
    }
}))


function Employees() {
  const classes = useStyles();
  const [records,setRecords]=useState(empService.getAllEmployees())

  const{TblContainer,TblHead,TblPagination,recordsAfterPagingAndSorting}=UseTable(records,headCells);

    return (
        <>
        <PageHeader 
        title='Page header'
        subTitle='page subtitle'
        icon={<PeopleAltTwoToneIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <TblContainer>
          <TblHead/>
            <TableBody>
            {
              recordsAfterPagingAndSorting().map(record =>(
                <TableRow key={record.id}>
                    <TableCell>{record.fullName}</TableCell>
                    <TableCell>{record.email}</TableCell>
                    <TableCell>{record.mobile}</TableCell>
                    <TableCell>{record.department}</TableCell>
                </TableRow>
              ))
            }
            </TableBody>
        </TblContainer>
        <TblPagination/>
        </Paper>
        </>
    )
}

export default Employees;
