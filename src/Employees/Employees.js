import React from 'react'
import EmployeeForm from './EmployeeForm';
import PageHeader from '../components/PageHeader'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import UseTable from '../components/UseTable';
import * as empService from "../Services/EmployeeService";
import { useState } from 'react';
import Controls from '../components/controls/Controls'
import SearchIcon from '@material-ui/icons/Search';

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
    },
    SearchEmpInput:{
        width:"75%",
        '& .MuiInputBase-input':{
          height:'2rem'
        }
    }
}))


function Employees() {
  const classes = useStyles();
  const [records,setRecords]=useState(empService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({fn:items => {return items}})

  const{TblContainer,TblHead,TblPagination,recordsAfterPagingAndSorting}=UseTable(records,headCells,filterFn);

  const handleSearch = event =>{
    let target = event.target
    setFilterFn({
       fn:items => {
         if(target.value === '')
         return items;
         else
         return items.filter(x => x.fullName.toLowerCase().includes(target.value.toLowerCase()))
       }
    })
  }
    return (
        <>
        <PageHeader 
        title='Page header'
        subTitle='page subtitle'
        icon={<PeopleAltTwoToneIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar >
          <Controls.Input
          label='Search Employee'
          className={classes.SearchEmpInput}
          InputProps={{ startAdornment:(
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
          )}}
         onChange={handleSearch}
          />
        </Toolbar>
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
