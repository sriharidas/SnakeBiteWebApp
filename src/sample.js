// import React, { Component } from 'react'
// //import App from './app'
// import ReactDOM from 'react-dom'
// //import { Button } from  '@material-ui/core';
// // import { Box, Grid, Button, ButtonGroup } from '@material-ui/core';
// // import { Container, Typography, Divider } from '@material-ui/core';
// import { TextField, Container, RadioGroup, Select, MenuItem} from '@material-ui/core'
// import {FormControl, FormControlLabel, Checkbox, Radio}  from '@material-ui/core'
// //import AppBar from '@material-ui/core/AppBar';
// class Index extends Component {
//   render() {
//     return (
//       <div>
//         {/* <App/>
//         <Button variant="contained">Default</Button>
//         <AppBar title="Snake Bite" /> */}
//         {/* <Grid container col={2}>
//         <Container>
//           <Typography component="h1">Container</Typography>
//           <Typography style={{fontWeight: 'bold'}} xs={3}>Box Component</Typography>
//           <Box Component="div" style={{background: 'red'}} spacing={2} m={2}>Box1</Box>
//           <Box Component="div" style={{background: 'red'}} xs= {6} sm={3} spacing={2} m={2}>Box2</Box>
//           <Box Component="div" style={{background: 'red'}} xs= {3} spacing={2} m={2}>Box3</Box>
//           <Box Component="p" style={{background: 'red'}} spacing={2} m={2}>Box4</Box>
//           <Box Component="span" style={{background: 'red'}} spacing={2} m={2}>Box5</Box>
//           <Box Component="p" style={{background: 'red'}} xs={6} spacing={2} m={2}>Box6</Box>

//         </Container>

//         <Container>
//         <Typography style={{fontWeight: 'bold'}} xs={3}>Box</Typography>
//           <Box Component="div" style={{background: 'red'}} spacing={2} m={2}>Box1</Box>
//           <Box Component="div" style={{background: 'red'}} xs= {6} sm={3} spacing={2} m={2}>Box2</Box>
//           <Box Component="div" style={{background: 'red'}} xs= {3} spacing={2} m={2}>Box3</Box>
//           <Box Component="p" style={{background: 'red'}} spacing={2} m={2}>Box4</Box>
//           <Box Component="span" style={{background: 'red'}} spacing={2} m={2}>Box5</Box>
//           <Box Component="p" style={{background: 'red'}} xs={6} spacing={2} m={2}>Box6</Box>

//         </Container>
    
    
//         </Grid>


//         <Grid container justify={'space-between'} xs={11}>
//           <Grid item>Text1</Grid>
//           <Grid item>Text1</Grid>
//           <Grid item>Text1</Grid>
//           <Grid item >Text1</Grid>
//           <Grid item>Text1</Grid>
//           <Grid item >Text1</Grid>
//           <Grid item>Text1</Grid>

//         </Grid>
//         <Divider/>
//         <Grid container justify={"space-evenly"}>
//           <Grid>
//           <Button color="primary">Button 1</Button>
//             <Button color="secondary">Button 1</Button>
//             <Button variant="contained" color="primary">Button 1</Button>
//             <Button  variant="outlined" color="primary">Button 1</Button>
//           </Grid>
            

//         </Grid> */}


  
//   {/* <AppBar >
//   <Tabs
//     textcolor="primary"
//     variant="fullwidth"
//   >
//           <Tab label="item 1">Item !</Tab>
//           <Tab label="item 2">Item !</Tab>
//           <Tab label="item 2">Item !</Tab>
//           <Tab label="item 2">Item !</Tab>
   

//         </Tabs>
//   </AppBar> */}
//           <Container>
//             <FormControl>
//               <TextField type="text" label="username" />
//                 <FormControlLabel control={<Checkbox/>} label="check1"/>
//                 <FormControlLabel control={<Checkbox/>} label="check1"/>
//                 <FormControlLabel control={<Checkbox/>} label="check1"/>
//                 <FormControlLabel control={<Checkbox/>} label="check1"/>
//                 <RadioGroup value={"radio 1"}>
//                 <FormControlLabel control={<Radio/>} value="radio 1" label="radio 1" />
//                 <FormControlLabel control={<Radio/>} value="radio 2" label="radio 2" />
//                 <FormControlLabel control={<Radio/>} value="radio 1" label="radio 3" />
//                 <FormControlLabel control={<Radio/>}  value="radio 4" label="radio 4" />
//                 </RadioGroup>
              
//             </FormControl>

//             <FormControl>
//              < FormControlLabel label="Choose" control={
//                  <Select>
//                  <MenuItem value={1}>Help</MenuItem>
//                  <MenuItem value={1}>Help</MenuItem>
//                  <MenuItem value={1}>Help</MenuItem>
//                  <MenuItem value={1}>Help</MenuItem>
 
//                </Select>
//              }  />
             
//             </FormControl>
//           </Container>
//         </div>
//     )
        
//   }
// }
// export default Index;
// ReactDOM.render(<Index/>, document.getElementById('root'))

/* Development */

import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import  InputLabel  from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
function Index() {
  
    const [anchorE1, setanChorE1] = React.useState(null)

    
    return (
        <div>
          <AppBar position="static">
              <Toolbar>
                <Grid container justify="space-between" spacing={2} md={10} lg={11} style={{boxSizing: 'border-box', fontSize: '1.2rem'}} >
                  {/* <Grid item><div>Home</div></Grid>
                  <Grid item> <div>About us</div></Grid>
                  <Grid item> <div>login</div></Grid> */}
                  <div >
                  <Button style={{flexGrow: 0, textAlign: 'left', color: '#FAFAFA'}}>
                    Menu
                  </Button>
                  <Menu  open={0 || Boolean(null)} style={{width: '200px'}} >
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Home</MenuItem>

                  </Menu>
                  <Button style={{flexGrow: 0, textAlign: 'left', color: '#FAFAFA'}} ></Button>
                  <Button style={{flexGrow: 0, textAlign: 'left', color: '#FAFAFA'}}  >Test</Button>
                  <Button style={{flexGrow: 0, textAlign: 'left', color: '#FAFAFA'}}  >chatbot</Button>
                  <Button style={{flexGrow: 0, textAlign: 'left', color: '#FAFAFA'}}  >contact us</Button>
                  </div>
                  
                  
                </Grid>
                
              </Toolbar>
            </AppBar>
          <Container >

            
            <div>
            <Typography variant="h2" component="div" >Welcome</Typography>
            <Button variant="outline" background="primary" color="primary" label=" login">Login</Button>
            <Button variant="contained" color="secondary" label=" login">Login</Button>
            <Button variant="contained" color="primary" label=" login">Login</Button>
            </div>
            
            <form>
              <FormGroup>
              <FormControl>
                    <inputLabel>Username</inputLabel>
                    <TextField  type="password" variant ="outlined" label="username" required name="password"  />
                </FormControl>
                <FormControl>
                    <inputLabel>Username</inputLabel>
                    <TextField  type="password" variant ="outlined" label="username" required   />
                </FormControl>
              </FormGroup>
               
            </form>

          </Container>
          

        </div>
    );
  
}

export default Index;


ReactDOM.render(<Index/>, document.getElementById('root'))