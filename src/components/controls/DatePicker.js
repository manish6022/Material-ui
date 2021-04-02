import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

export default function DatePicker(props) {
    const {name, value, label,onChange}= props

    const converToDefaultPara = (name,value) => ({
        target:{
            name,value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          inputVariant='outlined'
          format="MM/dd/yyyy"
          name={name}
          label={label}
          value={value}
          onChange={date => onChange(converToDefaultPara(name,date))}
        />

        </MuiPickersUtilsProvider>
    )
}
