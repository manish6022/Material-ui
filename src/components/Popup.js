import { DialogContent, DialogTitle, Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import { Dialog } from '@material-ui/core'
import React from 'react'
import Controls from '../components/controls/Controls'
import CloseIcon from '@material-ui/icons/Close';



export default function Popup(props) {
    const {openPopup,setOpenPopup,title,children,dividers=false,...other}=props

    return (
        <Dialog 
        open={openPopup}
        {...other}
        dividers={dividers}
        >
            <DialogTitle>   
                <Typography variant='h6' component='div'>
                    <Grid container alignItems='center'>
                        <Grid item >
                            {title}
                        </Grid>
                        <Grid item sm>

                        </Grid>
                        <Grid item>
                            <Controls.ActionBtn
                            color='secondary'
                            onClick={() =>{setOpenPopup(false)}}
                            >
                              <CloseIcon/>
                            </Controls.ActionBtn>
                        
                        </Grid>
                    </Grid>
                </Typography>           
            </DialogTitle>
                <DialogContent dividers={dividers}>{children}</DialogContent>
        </Dialog>
    )
}
