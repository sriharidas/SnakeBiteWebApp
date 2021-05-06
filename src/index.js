import {  CssBaseline} from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './components/header/Nav'

import {items} from './Items'



const Index = () => {
  return(
    <Router>
     <CssBaseline/>
     <Nav/>
    <Switch>
      {
        items.map(item => (
           <Route path={item.path} exact>
              {item.comp}
          </Route>
        ))
      }
     
    </Switch>
     {/* <Button>
                  Dialog
               </Button>
               <Dialog open={0}>
                       <DialogTitle>
                           Sample Title
                       </DialogTitle>
                   </Dialog> */}
    </Router>
  )

    
}

export default Index;
ReactDOM.render(<Index/>,document.getElementById('root'))