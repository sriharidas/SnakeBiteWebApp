import { Container, Divider, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ( {
    contents: {
        '& > *': {
            padding: '16px 0',
            textAlign: 'justify',
            fontWeight: '450'
        }
    }
}))

const ImgLinks = {
        symptoms: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Snake_bite_symptoms.svg/905px-Snake_bite_symptoms.svg.png"
    }


export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Container>
                {/* <img src={ImgLinks.symptoms} alt="symp" /> */}
            <div className={classes.contents}>

                
                
                 <Typography variant="h6" component="p">
                    Snakebite envenoming is a potentially life-threatening disease caused by toxins in the bite of a venomous snake. Envenoming can also be caused by having venom sprayed into the eyes by certain species of snakes that have the ability to spit venom as a defence measure.
                </Typography>
                <Typography  variant="h6" component="p">
                     Inadequate past efforts to control snakebite envenoming has produced fragmented, inaccurate epidemiological data. Many victims do not attend health centres or hospitals and instead rely on traditional treatments. However, available data show 4.5–5.4 million people get bitten by snakes annually. Of this, 1.8–2.7 million develop clinical illness and 81 000 to 138 000 die from complications.
                </Typography>
                <Typography  variant="h6" component="p">
                     High-risk groups include rural agricultural workers, herders, fishermen, hunters, working children, people living in poorly constructed houses and those with limited access to education and healthcare. Morbidity and mortality occur most frequently among young people and children suffer higher case fatality. Furthermore, women experience increased barriers to accessing medical care in some cultures and pregnant women are extremely vulnerable.
                </Typography>
               
            </div>
            <Divider/>
               <div className={classes.contents}>

                <Typography  variant="h6" component="p">
                Bites or sprayed venom from venomous snakes can cause a range of acute and serious medical emergencies. Envenoming from different types of snakes can cause different symptoms, some more serious than others. This makes the preparation of correct antivenoms an ongoing problem.
                </Typography>
                <Typography  variant="h6" component="p">
                Envenoming can cause severe paralysis that may prevent breathing, making immediate medical attention critical. People may also experience bleeding disorders that can lead to fatal haemorrhages or irreversible kidney failure. Severe local tissue destruction may also occur, which can lead to permanent disability and even limb amputation. Children are at higher risk of severe effects due to lower body mass than adults.
                </Typography>
                <Typography  variant="h6" component="p">
                Most deaths and serious consequences from snake bites are entirely preventable by making safe and effective antivenoms more widely available and accessible, particularly in high-risk areas. High quality snake antivenoms are the only effective treatment to prevent or reverse most of the venomous effects of snake bites.
                </Typography>
             
                </div>

                <Divider/>

                <div className={classes.contents}>
                <Typography  variant="h6" component="p">
                Snake antivenoms are effective treatments to prevent or reverse most of the harmful effects of snakebite envenoming and are included in the WHO list of essential medicines. The availability and accessibility of these antivenoms, along with raising awareness on primary prevention methods among communities and health workers, are the best ways to limit serious consequences and deaths from snakebite envenoming.
                </Typography>
               
                  <Typography  variant="h6" component="p">
                  High-risk groups include rural agricultural workers, herders, fishermen, hunters, working children, people living in poorly constructed houses and those with limited access to education and healthcare. Morbidity and mortality occur most frequently among young people and children suffer higher case fatality. Furthermore, women experience increased barriers to accessing medical care in some cultures and pregnant women are extremely vulnerable.
                  </Typography>
                </div>
            </Container>
        </div>
    )
}
