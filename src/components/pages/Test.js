import { Button, Container, Dialog, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, makeStyles, MenuItem, MenuList, Select, TextField, Typography } from '@material-ui/core'
import HelpIcon from '@material-ui/icons/Help';
import React, {useState} from 'react'

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

const symptoms = [
    {
        title: '1. swelling and pain around the bite',
        name: 'swelling',
        desc: 'Swelling may become apparent within 15 minutes and becomes massive in 2-3 days. It may persist for up to 3 weeks. The swelling spreads rapidly from the site of the bite and may involve the whole limb and adjacent trunk.'
    },
    {
        title: '2. Redness and bruising',
        name: 'Redness',
        desc: 'Symptoms of a venomous snake bite can include swelling, pain, redness, and bruising around the bite area. Usually, people know right away if a snake has bitten them. '
    }, {
        title: '3. Elevated heart rate',
        name: 'HeartRate',
        desc: 'Positioning of the extremity below or at the level of the heart should be individualized—for snakebites with severe and potentially fatal systemic toxicity, systemic toxicity might be delayed by positioning the extremity below the heart, while for snakebites with severe local tissue damage and less systemic toxicity'
    }, {
        title: '4. breathing difficulty',
        name: 'BreathingDifficulty',
        desc: 'Some poisonous snakebite symptoms can cause vision problems, speaking and breathing trouble, and numbness close to or distant to the bite site. There may be muscle death, which can lead to kidney failure. Some poisonous snakebites lead can paralyze the breathing muscles and lead to death.'
    }, {
        title: '5. blurred vision',
        name: 'BlurredVision',
        desc : 'The blurred vision that occurred in the patient on the second day was probably due to the development of acute anterior uveitis due to the toxicity of snake venom, and the severe diminution of vision that occurred over the next four days'
    }, {
        title: '6. nausea or vomiting',
        name: 'Nausea',
        desc: 'Even a bite from a harmless snake can be serious, leading to an allergic reaction or an infection. Venomous snake bites can produce an array of symptoms, including localized pain and swelling, convulsions, nausea, and even paralysis.'
    }, {
        title: '7. weakness',
        name: 'weakness',
        desc: 'Acute neuromuscular weakness with respiratory involvement is the most clinically important neurotoxic effect. Data is limited on the many other acute neurotoxic manifestations, and especially delayed neurotoxicity.'
    }, {
        title: '8. bleeding',
        name: 'Bleeding',
        desc: 'Bleeding at the site of the bite is due to the local action of the venom as a vasculotoxin. Systemic bleeding occurs with severe poisoning and appears to be mainly dependent on platelet deficiency and the co-existing defibrination syndrome appears to play a minor role in the initiation of bleeding.'
    }, {
        title: ' 9. itching near the bite area',
        name: 'Itching',
        desc: 'Symptoms may include rash, itching, hives, joint or muscle aching, and fever. These are often mild. They can be treated with antihistamines and other medicines. Snake venom can affect how your blood clots.'
    }
    
]


export default function Test() {
    const classes = useStyles();
    const [symptom, setSymptom] = useState(initial);
    const [Dialogs, setDialogs] = useState(DialogInitial);

    // const [swelling, setswelling] = useState(false);
    // const [Redness, setRedness] = useState(false);
    // const [HeartRate, setHeartRate] = useState(false);
    // const [BreathingDifficulty, setBreathingDifficulty] = useState(false);
    // const [BlurredVision, setBlurredVision] = useState(false);
    // const [Nausea, setNausea] = useState(false);
    // const [weakness, setweakness] = useState(false);
    // const [Bleeding, setBleeding] = useState(false);
    // const [Itching, setItching] = useState(false);

    const handleChange = e => {
        setSymptom( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        
        }))
        const name = e.target.name
        console.log(symptom[name])
    }

    // const handleDialog = e => {
    //     setDialogs( prevState => ({
    //         ...prevState,
    //         [e.target.name]: 

    //     }))
    // }
    return (
        <div className={classes.Container}>
            <Container>
                 <Grid container justify="space-around" alignContent="space-around" style={{minHeight: '80vh'}} >

                    {
                        symptoms.map(x=>{
                        // console.log(x.name,dialogs[x.name])

                            return(
                        
                        <Grid Container >
                            <Grid item>
                                <label> 
                                    <Typography variant="subtitle1">
                                    {x.title}    
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
                                    <h3>{x.title}</h3>
                                    <img src="https://image.shutterstock.com/image-photo/first-aid-training-snake-bite-600w-1009656238.jpg" style={{height: '150px', display:'block', margin:'auto' }} />
                                    <p style={{textAlign: 'justify'}}>{x.desc}</p>
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
                 <Button variant="contained" color="primary" style={{margin: 'auto'}} onclick={   console.log(Dialogs)} >Check</Button>
                 </Grid>
                 
            </Container>
        </div>
    )
}

