import { Button, CircularProgress, Container, Dialog, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, makeStyles, MenuItem, MenuList, Select, TextField, Typography } from '@material-ui/core'
import HelpIcon from '@material-ui/icons/Help';
import React, {useState, useEffect} from 'react'
import {symptoms} from './../../Items'
const useStyles = makeStyles( theme => ({
    Container:{
        paddingTop: theme.spacing(2)
    },
    DropDrownRoot: {
        width: '100%',
        margin: 'auto'
    },
    DropDownLabel: {
      textAlign:'center'
    },
    DropDrown: {
        width: '280px',

        margin: 'auto',
        [theme.breakpoints.up('sm')]:{
            width: '290px'
        },
        [theme.breakpoints.up('md')]:{
            width: '380px'
        }
    },
    DropMain: {
        padding: '12px 0',
        margin: 'auto'
    },
    Typography:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    Contents: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.85rem'
        },
    
    },
    Title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    }
}))

const initial = {
    swelling: '',
    Redness: '',
    HeartRate: '',
    BreathingDifficulty: '',
    BlurredVision: '',
    Nausea: '',
    weakness: '',
    Bleeding: '',
    Itching: ''
}
const DialogInitial = {
    swelling: false,
    Redness: false,
    HeartRate: false,
    BreathingDifficulty: false,
    BlurredVision: false,
    Nausea: false,
    weakness: false,
    Bleeding: false,
    Itching: false
}



export default function Test() {
    const classes = useStyles();
    const [symptom, setSymptom] = useState(initial);
    const [Dialogs, setDialogs] = useState(DialogInitial);
    const [ResultDialog, setResultDialog] = useState(false)
    const [Type, setType] = useState("")
    const [Acc, setAcc] = useState(0)

    useEffect(()=> {
        if(symptom.swelling === 'yes' && symptom.Redness === 'yes' && symptom.Bleeding === 'yes' && symptom.BreathingDifficulty === 'yes' )
            setType("Venomous snake")
        else
            setType("Non-venomous snake")
        
        
    })

    const handleChange = e => {
        setSymptom( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        
        }))
        console.log("Symptom", symptom)
    }


    return (
        <div className={classes.Container}>
            <Container>
                 <Grid container justify="space-around" alignContent="space-around" style={{minHeight: '80vh'}} >

                    {
                        symptoms.map(x=>{
                        // console.log(x.name,dialogs[x.name])

                            return(
                        
                        <Grid >
                            <Grid item>
                                <label> 
                                   
                                    <Typography variant="subtitle1">
                                        <Typography component="span" className={classes.Typography}>
                                             {x.title}
                                        </Typography>
                                       
                                        {/* <Typography style={{flexGrow:'1'}} /> */}
                                            <Button  name={x.name} onClick={e => {
                                                setDialogs(prevState => ({
                                                    ...prevState,
                                                    [x.name]: true
                                                }))
                                            
                                            }}><HelpIcon/></Button>
                                    </Typography>
                                
                                       
                                </label>
                                
                            </Grid>
                            <Grid item  >
                                <div style={{width: 'fit-content', margin:'auto'}}>
                                <FormControl value="1"   classes={{root: classes.DropMain}} >
                                    <InputLabel classes={{root: classes.DropDownLabel}} >Symptoms</InputLabel>
                                    <Select placeholder="Symptomss" name={x.name} label="symp" className={classes.DropDrown}  onChange={handleChange} >
                                       <MenuItem value="yes">Yes</MenuItem>
                                       <MenuItem value="no">No</MenuItem>
                                    </Select>
                                </FormControl>
                                </div>
        
                            </Grid>
                            <Dialog open={Dialogs[x.name]} >
                                <DialogTitle>
                                    <h3 className={classes.Title}>{x.title}</h3>
                                    <img src="https://image.shutterstock.com/image-photo/first-aid-training-snake-bite-600w-1009656238.jpg" style={{height: '150px', display:'block', margin:'auto' }} />
                                    <p style={{textAlign: 'justify'}} className={classes.Contents}>{x.desc}</p>
                                    <Button color="primary" variant="contained" name={x.name} style={{margin: 'auto', display: 'block'}} onClick={e => {
                                        setDialogs(prevState => ({ ...prevState, [x.name]: false }))
                                    }}>close</Button>
                                </DialogTitle>
                               
                            </Dialog>
                        </Grid>
                            
                      
                        )})
                    }

                 </Grid>
                 <Grid container>
                 <Button variant="contained" color="primary" style={{margin: 'auto'}} onClick={  () => setResultDialog(true) } >Check</Button>
                 </Grid>
                 <Dialog open={ResultDialog} >
                    
                     <DialogTitle>
                         
                         <div>Result:</div>
                         <Divider/>
                         <p>
                            <Grid conatiner alignItems="center" alignContent="center">
                                 <span style={{ width: '50px', height: '50px' }} >80%</span>
                                 <CircularProgress value="80" variant="static" thickness={8} style={{ width: '50px', height: '50px' }}>50</CircularProgress> 
                            </Grid>
                           

                            <div> Type of the snake bite: {Type}</div>
                         </p>
                        

                     </DialogTitle>
                     <Divider/>
                     <Button onClick={ () => setResultDialog(false) }>Close</Button>
                 </Dialog>
            </Container>
        </div>
    )
}

