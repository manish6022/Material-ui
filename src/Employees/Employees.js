import React from 'react'
import EmployeeForm from './EmployeeForm';
import PageHeader from '../components/PageHeader'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    pageContent:{
      margin:theme.spacing(5),
      padding: theme.spacing(3)
    }
}))


function Employees() {
  const classes = useStyles();
    return (
        <>
        <PageHeader 
        title='Page header'
        subTitle='page subtitle'
        icon={<PeopleAltTwoToneIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
        <EmployeeForm />
        </Paper>
        </>
    )
}

export default Employees;
