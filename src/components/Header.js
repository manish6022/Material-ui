import React from 'react';

import {AppBar,Toolbar,Grid,InputBase} from '@material-ui/core'

function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
            <Grid container>
                <Grid item sm={6}>
                    <InputBase/>
                </Grid>
                <Grid item sm={6}>

                </Grid>
            </Grid>
            </Toolbar>

        </AppBar>
    )
}

export default Header
