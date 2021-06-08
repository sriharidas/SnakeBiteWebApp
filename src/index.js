import { Button, CssBaseline, Dialog, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fab } from "@material-ui/core";
import Nav from "./components/header/Nav";
import MessageIcon from "@material-ui/icons/Message";
import CloseIcon from "@material-ui/icons/Close";
import { items } from "./Items";
import { Chatbot as ChatBot } from "react-chatbot-kit";
// import config from './components/Chatbot/Config'
// import MessageParser from './components/Chatbot/MessageParser'
// import ActionProvider from './components/Chatbot/ActionProvider'
import Chatbot from "./components/pages/Chatbot";

const useStyles = makeStyles((theme) => ({
  FloatBtn: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: "2000",
  },
  ChatBotDiaglog: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: "-3.5rem",
  },
}));

const Index = () => {
  const [ChatDialog, setChatDialog] = useState(false);
  const classes = useStyles();

  const HandleChat = () => {
    if (ChatDialog === false) setChatDialog(true);
    else setChatDialog(false);
  };

  return (
    <Router>
      <CssBaseline />
      <Nav />
      <Switch>
        {items.map((item) => (
          <Route path={item.path} exact key={item.title}>
            {item.comp}
          </Route>
        ))}
      </Switch>
      <Fab
        color={ChatDialog === false ? "primary" : "secondary"}
        aria-label="add"
        className={classes.FloatBtn}
        onClick={HandleChat}
      >
        {ChatDialog === false ? <MessageIcon /> : <CloseIcon />}
      </Fab>
      <Dialog
        open={ChatDialog}
        classes={{
          container: classes.ChatBotDiaglog,
        }}
      >
        <Chatbot styles={{ width: "800px" }} />
        {/* <ChatBot config={config}  messageParser={MessageParser}  actionProvider={ActionProvider}  /> */}
      </Dialog>
    </Router>
  );
};

export default Index;
ReactDOM.render(<Index />, document.getElementById("root"));
