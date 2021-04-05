import { Slide, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'


export default function Notification(props) {
    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
      }
    const handleClose = (event,reason)=>{
        if(reason ==='clickaway'){
            return ;
        }
        setNotify({
            ...notify,
            isOpen:false
        },
        TransitionLeft())
    }
    const {notify,setNotify}= props
    return (
        <Snackbar
        open={notify.isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        TransitionComponent={TransitionLeft}
        >
                <Alert severity={notify.type}
                onClose={handleClose}
                        >
                    {notify.message}
                </Alert>
        </Snackbar>
    )
}
