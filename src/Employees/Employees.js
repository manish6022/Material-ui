import React from 'react'
import EmployeeForm from './EmployeeForm';
import PageHeader from '../components/PageHeader'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { InputAdornment, makeStyles, Paper, Slide, TableBody, TableCell, TableRow, Toolbar, Grid } from '@material-ui/core';
import UseTable from '../components/UseTable';
import * as empService from "../Services/EmployeeService";
import { useState } from 'react';
import Controls from '../components/controls/Controls'
import SearchIcon from '@material-ui/icons/Search';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import Popup from '../components/Popup'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Notification from '../components/Notification';
import ConfirmDialog from '../components/ConfirmDialog'
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
        width:"100%",
        '& .MuiInputBase-input':{
          height:'2rem'
        }
    },
    dialogWrapup:{
      padding:theme.spacing(2),
      position:'absolute',
      top:theme.spacing(5)
  },
  dialogContent:{
    textAlign:'center'
  },
  dialogAction:{
    justifyContent:'center'
  }
}))


function Employees() {
  const classes = useStyles();



  const [notify,setNotify] = useState({isOpen:false,message:'',type:''})
  const [records,setRecords]=useState(empService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({fn:items => {return items}})
  const [openPopup, setOpenPopup] = useState(false)
  const [recordsForEdit, setRecordsForEdit] = useState(null)
  const [confirmDialog, setConfirmDialog] = useState({isOpen:false,title:'',subTitle:'',dialogActionStyle:'',dialogContentStyle:''})



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
    if(employee.id === 0){
      empService.insertEmployee(employee)
    }else{
      empService.updateEmployee(employee)
    }
    resetForm()
    setRecordsForEdit(null)
    setOpenPopup(false)
    setRecords(empService.getAllEmployees())
    setNotify({
      isOpen:true,
      message:'Submitted Successfully',
      type:'success'
    })
  }

  const openInPopUp = (item) =>{
      setRecordsForEdit(item)
      setOpenPopup(true)
  }

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen:false
    })
    empService.deleteEmployee(id)
    setRecords(empService.getAllEmployees())
    setNotify({
      isOpen:true,
      message:'Deleted Successfully',
      type:'error'
    })
  }
    return (
        <>
        <PageHeader 
        title='Employee Data'
        subTitle='A contact book for your Employee'
        icon={<PeopleAltTwoToneIcon fontSize='large'/>}
        />

        <Grid container justify='center'>

        <Grid item md={1}>

          </Grid>

         <Grid item md={10}>
        <Paper className={classes.pageContent}>
          
        <Toolbar >
        <Grid container>
            <Grid item md={7}>
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
          </Grid>
          <Grid item md={3}>

          </Grid>
          <Grid item md={2}>
            
          

         <Controls.Button
          variant='outlined'
          text='Add Employee'
          color='secondary'
          startIcon={<PersonAddTwoToneIcon/>}
          onClick={()=>{setOpenPopup(true); setRecordsForEdit(null)
          }}
          />
          </Grid>
           </Grid>
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
                        <DeleteForeverIcon
                        onClick={()=>{
                          setConfirmDialog({
                            isOpen:true,
                            title:'Are you sure to delete this record?',
                            subTitle:"you cannot undo this operation",
                            onConfirm:()=>{onDelete(record.id)}
                          })
                      
                        }}
                        />
                      </Controls.ActionBtn>
                    </TableCell>
                </TableRow>
              ))
            }
            </TableBody>
        </TblContainer>
        <TblPagination/>
        </Paper>
        </Grid>
        
<Grid item md={1}>

</Grid>
        </Grid>

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
        <Notification
        notify={notify}
        setNotify={setNotify}

        />
        <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
            TransitionComponent={Transition}
        />
        </>
    )
}

export default Employees;