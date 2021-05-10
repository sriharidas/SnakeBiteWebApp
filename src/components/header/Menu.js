import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {items } from './../../Items'
const useStyles = makeStyles(theme => ({
    MenuBtn: {
        color: '#fff',
        textDecoration: 'none'
    },
     
}))



export default function Menu() {
    const classes = useStyles()

    return (
        <>
        
        <Grid container>
            {
                items.map(item => (
                        <Grid item key="item.title"> 
                            <Button >
                               <Link className={classes.MenuBtn} to={item.path}>
                               {item.title}
                               </Link>
                            </Button>
                        </Grid>
                ))
            }
        </Grid>
        </>
    )
}
