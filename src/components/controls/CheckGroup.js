import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { FormControl } from '@material-ui/core'


export default function CheckGroup(props) {
    const{name,label,value,onChange}= props

    const converToDefaultPara = (name,value) => ({
        target:{
            name,value
        }
    })

    return (
        <FormControl>
        <FormControlLabel
          label={label}
          control={
            <Checkbox
              name={name}
              checked={value}
              onChange={event =>onChange(converToDefaultPara(name,event.target.checked))}
              color="primary"
            />
          }
        />
        </FormControl>
    )
}
