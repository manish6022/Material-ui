import React from 'react';

import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Grid from '@material-ui/core/Grid/Grid'
import InputBase from '@material-ui/core/InputBase/InputBase'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Badge from '@material-ui/core/Badge/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(theme =>({
    root:{
        backgroundColor:'#fff',
        
    },
    serrchInput:{
        opacity:'0.6',
        padding:`${theme.spacing(0)}px ${theme.spacing(1)}px`,
        fontSize:'0.8rem',      
        '&:hover':{
            backgroundColor:'#f4f4f4',
            borderRadius:'5px'    
        },
        '& .MuiSvgIcon-root':{
            marginRight:theme.spacing(1)
        }
    }
}))

function Header() {

    const classes= useStyle();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item >
                        <InputBase placeholder="search"
                        className={classes.serrchInput}
                        startAdornment={<SearchIcon fontSize='small'/> }/>
                    </Grid>

                    <Grid item sm>
                    </Grid>

                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={5} color='secondary'>
                                <NotificationsIcon fontSize='small' />
                            </Badge>                         
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={5} color='primary'>
                                <ShoppingCartIcon fontSize='small' />
                            </Badge>                         
                        </IconButton>
                        <IconButton>
                                <PowerSettingsNewIcon fontSize='small' />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}

export default Header
