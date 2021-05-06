import { Box, Button, Container, CssBaseline, Grid, GridList, GridListTile, GridListTileBar, Hidden, Paper, Typography } from '@material-ui/core'
import React from 'react'

export default function Test() {
    return (
        <>
        <Grid container style={{background:'#fff'}} >
            <Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Paper>
            </Grid>
            <Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid><Grid item xs={6} md={4} lg={2} >
                <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            </Grid>
        </Grid>
        <Typography component="p" variant="h4" >Grid List</Typography>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <GridList style={{ }}>
            {/* <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >
            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography ><Typography  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >
            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >
            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >
            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >
            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >

            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >
            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography >
            <Typography component="span" variant="span"  cols={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1'  }}> This is a grid list sample </Typography > */}

            <GridListTile cols={1} style={{flexWrap: 'no-wrap'}}>
            <Paper spacing={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
            <GridListTileBar title="This is tile" subtitle="This is subtile"/>
    
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>
            <GridListTile>
            <Paper spacing={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>
            <GridListTile>
            <Paper spacing={1} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>
            <GridListTile>
            <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>   <GridListTile>
            <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>
            <GridListTile>
            <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>   <GridListTile>
            <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>
            <GridListTile>
            <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>   <GridListTile>
            <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>
            <GridListTile>
            <Paper spacing={2} style={{height: '200px', padding: '16px', margin: '10px', background: '#f1f1f1' }}> This is a grid list sample </Paper>
                  <GridListTileBar title="This is tile" subtitle="This is subtile"/>
            </GridListTile>
            </GridList>

        </div>
        
        <Grid conatiner>
               <Hidden smUp>
                   <Button>SmUp</Button>
               </Hidden>
               <Hidden smDown>
                   <Button>smDown</Button>
               </Hidden>
               <Hidden mdUp>
                   <Button>mdUp</Button>
               </Hidden>
               <Hidden mdDown>
                   <Button>mdDown</Button>
               </Hidden>
            </Grid>
        </>
    )
} 
