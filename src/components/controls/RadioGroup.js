import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio,RadioGroup as MuiRadioGroup } from '@material-ui/core'

export default function RadioGroup(props) {
    const { name, label , value , onChange, items} = props
    return (
      <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <MuiRadioGroup  name={name} value={value} onChange={onChange} row>
        {items.map((item,index)=>(
                    <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
        ))}
      </MuiRadioGroup>
    </FormControl>
    )
}
