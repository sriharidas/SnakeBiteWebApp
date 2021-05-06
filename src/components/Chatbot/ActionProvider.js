class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    HandleResponse = () => {
      const message = this.createChatBotMessage("Hello there! How may I help you?")
      this.updateState(message)
    }

    updateState = BotMessage => {
      this.setState( prevState => ({
        ...prevState, messages: [...prevState.messages, BotMessage]
      }))
    }
    
  }
  
  export default ActionProvider;