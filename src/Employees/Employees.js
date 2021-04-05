import React from 'react'
import EmployeeForm from './EmployeeForm';
import PageHeader from '../components/PageHeader'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { InputAdornment, makeStyles, Paper, Slide, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import UseTable from '../components/UseTable';
import * as empService from "../Services/EmployeeService";
import { useState } from 'react';
import Controls from '../components/controls/Controls'
import SearchIcon from '@material-ui/icons/Search';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import Popup from '../components/Popup'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const headCells = [
  {id:'fullName',label:'Employee Name'},
  {id:'email',label:'Email Address (Personal)'},
  {id:'mobile',label:'Mobile Number'},
  {id:'department',label:'Department'},
  {id:'actions',label:'Actions',disableSorting:true}
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


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
    },
    dialogWrapup:{
      padding:theme.spacing(2),
      position:'absolute',
      top:theme.spacing(5)
  }
}))


function Employees() {
  const classes = useStyles();
  const [records,setRecords]=useState(empService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({fn:items => {return items}})
  const [openPopup, setOpenPopup] = useState(false)
  const [recordsForEdit, setRecordsForEdit] = useState(null)
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


  const addOrEdit = (employee,resetForm) =>{
    if(employee.id == 0){
      empService.insertEmployee(employee)
    }else{
      empService.updateEmployee(employee)
    }
    resetForm()
    setOpenPopup(false)
    setRecords(empService.getAllEmployees())
  }

  const openInPopUp = (item) =>{
      setRecordsForEdit(item)
      setOpenPopup(true)
  }
    return (
        <>
        <PageHeader 
        title='Page header'
        subTitle='page subtitle'
        icon={<PeopleAltTwoToneIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
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
         <Controls.Button
          variant='outlined'
          text='Add Employee'
          color='secondary'
          startIcon={<PersonAddTwoToneIcon/>}
          onClick={()=>setOpenPopup(true)}
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
                    <TableCell>
                      <Controls.ActionBtn 
                      color='primary'
                      >
                        <EditIcon
                        onClick={()=>{openInPopUp(record)}}
                        />
                      </Controls.ActionBtn>
                      <Controls.ActionBtn 
                      color='secondary'>
                        <DeleteForeverIcon/>
                      </Controls.ActionBtn>
                    </TableCell>
                </TableRow>
              ))
            }
            </TableBody>
        </TblContainer>
        <TblPagination/>
        </Paper>
        <Popup 
        title='Employee Form'
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        TransitionComponent={Transition}
        dividers={true}
        maxWidth='md'
        classes={{paper:classes.dialogWrapup}}
        >
        <EmployeeForm 
        recordsForEdit={recordsForEdit}
        addOrEdit={addOrEdit}
        />
        </Popup>
        </>
    )
}

export default Employees;