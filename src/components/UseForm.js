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

export function UseForm(initialFValues) {
    const [values, setValues]= useState(initialFValues);

    const handleInputChange = (event) => {
        const {name , value} = event.target
        setValues({
          ...values,
          [name]: value
        })
    }


    return {
        values,
        setValues,
        handleInputChange
    }
       
}


export function Form(props) {
    const classes = useStyles();

    return (
        <form action="" className={classes.root} autoComplete='off'>
                {props.children}
        </form>
    )
}