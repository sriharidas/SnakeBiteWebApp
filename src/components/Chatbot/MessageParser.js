class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(userMessage) {
     if(userMessage.includes("Hi")){
    
       this.actionProvider.HandleResponse()
       console.log(this.state)
     }
    }
  }
  
  export default MessageParser;
  