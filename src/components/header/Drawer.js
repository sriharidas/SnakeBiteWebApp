import { Button, Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import {items} from './../../Items'

const useStyles = makeStyles( theme => ({
    Drawer: {
        width: '200px',
       
    },
    DrawerList:{
        textAlign: 'center',
        margin: '0 auto',
        padding: '0'
    }, 
     MenuBtn: {
        color: '#000',
        width: '100%',
        textDecoration: 'none'
    },
}));


export default function Drawer( props ) {
    console.log(props)
    const classes = useStyles();
    return (
    <>
        <MuiDrawer open={props.open} anchor="left">
            <List className={classes.Drawer}>
                <ListItem>
                <ListItemIcon >
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '25px'}}>
   
                    <div style={{ position: 'absolute', right: '20px', top: '5px'}}>
                    <CloseIcon onClick = {props.MenuActive} style={{ display: 'block'}}/>

                    </div>
                </div>
                      
                  </ListItemIcon>
                </ListItem>
                {
                    items.map( item => {
                        return(
                            <ListItem button key={item.title}>                 
                            <ListItemText className={classes.DrawerList}>
                                <Button style={{width:'100%'}} onClick={props.MenuActive}>
                                    <Link className={classes.MenuBtn} to={item.path} >
                                        {item.title}
                                    </Link>
                                </Button>
                                
                            </ListItemText>
                          </ListItem>
                        )
                    })
                }
            </List>
        </MuiDrawer>
    </>
    )
}
