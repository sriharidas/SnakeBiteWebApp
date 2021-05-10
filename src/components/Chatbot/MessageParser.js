class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(userMessage) {
      const message = userMessage.toLowerCase()
     if(message.includes("hi") || message.includes("hello") || message.includes("hey")){
    
       this.actionProvider.HandleResponse()
       console.log(this.state)
     }

     if((message.includes("symptoms") || message.includes("symptom"))
         && (message.includes("snake bite") || message.includes("venmous snake bite"))){
       this.actionProvider.ShowSymptoms()
     }

     if( (message.includes("remedy") || message.includes("first aid") || message.includes("safety messures")) 
          && message.includes("snake bite")){
       this.actionProvider.SnakeBiteRemedy()
     }

     if( (message.includes("most") || (message.includes("venomous") && message.includes("snake")) )){
       this.actionProvider.VenomousSnake()
     }
    }
  }
  
  export default MessageParser;
  