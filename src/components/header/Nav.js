import { AppBar, Button, Container, Dialog, DialogTitle, Grid,  Hidden,   makeStyles,Toolbar, Typography, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer'
import React, {useState} from 'react'
import Menu from './Menu';



const useStyles = makeStyles(theme => ({
    Drawer: {
        width: '200px',
       
    },
    DrawerList:{
        textAlign: 'center',
        margin: '0 auto'
    },
   NavLink: {
       color: '#fff'
   },
   NavTitle: {
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem'
    }
   },
   Menu: {
       padding: theme.spacing(2),
       [theme.breakpoints.down('sm')]:{
           padding: theme.spacing(1)
       }
   },

   Container: {
        padding: '0',
        margin: 'auto ',
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),

        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        }
  
   },
   Trim: {
       padding: '0'
   }
}));

export default function Nav() {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Container classes= {{
                        maxWidthLg: classes.Container,
                        
                    }} >
                    
                        <Grid container justify="flex-start" alignItems="center" alignContent="center">
                            <Grid item>
                        <Hidden mdUp>
                            <div >
                               <div className={classes.Menu}>
                                   <Button  onClick= {() => setToggle(true)}>
                                         <MenuIcon/>
                                   </Button>
                             
                               </div>
                            </div>
                       
                        </Hidden>
                        </Grid>
                  
                     <Grid item>
                            
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center',   textAlign: 'center'}}>
                            <Typography variant="h5" style={{textAlign: 'center'}} className={classes.NavTitle}>Snake Bite Classifier</Typography>
                            <Typography variant="subtitle2" >Data Science Lab</Typography>
                        </div>
                    
                     </Grid>
                        <Grid item xs   /> 
                        <Grid item>
                            <div  style={{width: 'fit-content', margin: '0'}}>
                                <Hidden smDown>
                                    <Menu/>
                                </Hidden>
                            </div>
                        </Grid>
                        </Grid>

                    </Container>
                </Toolbar>
            </AppBar>

           <Drawer open={toggle} MenuActive= {() => {setToggle(false)}} />
 
        {/* <MuiDrawer open={toggle} anchor="left">
            <List className={classes.Drawer}>
                <ListItem>
                <ListItemIcon >
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '25px'}}>
   
                         <div style={{ position: 'absolute', right: '20px', top: '5px'}}>
                         <CloseIcon onClick = {() => {setToggle(0)}} style={{ display: 'block'}}/>

                         </div>
                       

                        
                    </div>
                     
                  </ListItemIcon>
                </ListItem>
                {
                    items.map( item => {
                        return(
                            <ListItem button>                 
                            <ListItemText className={classes.DrawerList}>{item.title}</ListItemText>
                          </ListItem>
                        )
                    })
                }
                </List>
               </MuiDrawer> */}
               
        </div>
    )
}
