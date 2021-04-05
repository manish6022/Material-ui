import { IconButton } from '@material-ui/core';
import { DialogActions, DialogContent, Typography,Dialog, DialogTitle, makeStyles } from '@material-ui/core'
import React from 'react'
import Controls from './controls/Controls'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyle = makeStyles(theme=>({
    dialog:{
        padding:theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    },
    dialogTitle:{
        textAlign:'center'
      },

    dialogContent:{
      textAlign:'center'
    },
    dialogAction:{
      justifyContent:'center'
    },
    inputButton:{
        backgroundColor:'transparent',
        color:theme.palette.secondary.main,
        '&:hover': {
            backgroundColor:theme.palette.secondary.light,
            cursor: "default"       
        },
        '& .MuiSvgIcon-root': {
            fontSize: '7rem',
        }
    }
}))


export default function ConfirmDialog(props) {
    const classes = useStyle();
    const {confirmDialog,setConfirmDialog,...other}=props 
    return (
        <Dialog open={confirmDialog.isOpen}
        classes={{paper:classes.dialog}}
        {...other}
        >
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.inputButton}>
                    <CancelOutlinedIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6' display='flex'>
                        {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                        {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                text='No'
                color='default'
                onClick={()=>setConfirmDialog({...confirmDialog,isOpen:false})}
                />
                <Controls.Button
                text='Yes'
                color='Secondary'
                onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}
