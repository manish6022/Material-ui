import React from 'react'
import {Button as MuiButton, makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme =>({
    root:{
        margin: theme.spacing(1)
    },
    label:{
        textTransform:'none'
    }
}))

export default function Button(props) {
    const classes = useStyle();
    const {text,size,color,variant,onClick,...other}=props
    return (
        <MuiButton
        variant={variant || 'contained'}
        color={color || 'primary'}
        size={size || 'large'}
        onClick={onClick}
        classes={{root:classes.root,label:classes.label}}
        {...other}
        >
            {text}
        </MuiButton>
    )
}
