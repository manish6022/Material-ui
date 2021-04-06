import React from 'react'
import Paper from '@material-ui/core/Paper/Paper'
import Card from '@material-ui/core/Card/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root:{
        backgroundColor:"#fdfdff"
    },
    pageHeader:{
        display:"flex",
        padding:`${theme.spacing(4)}px ${theme.spacing(30)}px`,
        marginBottom: theme.spacing(3)
    },
    pageIcon:{
        display:"inline-block",
        padding: theme.spacing(2),
        color: "#3c44b1",
        },
    pageTitle:{
        paddingLeft: theme.spacing(3),
        '& .MuiTypography-subtitle2':{
            opacity: '0.6'
        }
    }
    
}))

function PageHeader(props) {
    const classes = useStyle();
    const {title,subTitle,icon} = props;
    return (
        <Paper className={classes.root} elevation={0} square>
                <div className={classes.pageHeader}>
                    <Card className={classes.pageIcon}>
                        {icon}
                    </Card>
                    <div className={classes.pageTitle}>
                        <Typography variant="h6" color="initial" component='div'>
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" color="initial" component='div'>
                            {subTitle}
                        </Typography>
                    </div>
                </div>
        </Paper>
    )
}

export default PageHeader
