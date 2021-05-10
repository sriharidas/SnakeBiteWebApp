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
    ShowSymptoms = () => {
      const message = this.createChatBotMessage("Here are some most common symptoms", { widget: "snake bite symptoms"})
      this.updateState(message)
    }
    SnakeBiteRemedy = () => {
      const message = this.createChatBotMessage("First aid for venomous snake bite", { widget: 'snake bite remedy' })
      this.updateState(message)
    }

    VenomousSnake = () => {
      const message = this.createChatBotMessage("Most venomous snake",{ widget: 'venomus snake' })
      this.updateState(message)
    }

    updateState = BotMessage => {
      this.setState( prevState => ({
        ...prevState, messages: [...prevState.messages, BotMessage]
      }))
    }
    
  
  }
  
  export default ActionProvider;