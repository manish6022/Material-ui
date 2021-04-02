import { FormControl, FormHelperText, InputLabel, MenuItem,Select as MuiSelect} from '@material-ui/core';
import React from 'react'

export default function Select(props) {
    const { name, label, value ,error=null, onChange,options}= props;
    return (
        <FormControl variant="outlined"{...(error && {error:true} )}>
        <InputLabel id="formSelectId">{label}</InputLabel>
        <MuiSelect
          labelId="formSelectId"
          id="demo-simple-select-outlined"
          value={value}
          onChange={onChange}
          label={label}
          name={name}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option,index)=>(
         <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
          ))}
        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}

      </FormControl>
    )
}
