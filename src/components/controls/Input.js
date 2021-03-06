import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {
    const {name,label, value , onChange,error=null,...other}= props
    return (
        <TextField                  
        label={label}
        name={name}
        variant="outlined"
        value={value}
        onChange={onChange}
        {...other}
        
        {...(error && {error:true,helperText:error} )}
      />
    )
}
