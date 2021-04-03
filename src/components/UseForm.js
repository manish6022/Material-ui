import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'


const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)

        },
        '&  .MuiOutlinedInput-input': {
            padding: '18.5px 14px'
        }
       
    }
}))

export function UseForm(initialFValues,validateOnChange=false,validate) {
    const [values, setValues]= useState(initialFValues);
    const [errors, setErrors]= useState({});


    const handleInputChange = (event) => {
        const {name , value} = event.target
        setValues({
          ...values,
          [name]: value
        })
        if (validateOnChange)
            validate({[name]:value}) 
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }


    return {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        resetForm
    }
       
}


export function Form(props) {
    const classes = useStyles();
    const {children,...other}=props;
    return (
        <form action="" className={classes.root} autoComplete='off' {...other}>
                {props.children}
        </form>
    )
}
