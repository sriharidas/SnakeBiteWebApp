import { createChatBotMessage } from "react-chatbot-kit";
import SnakeBiteRemedy from "./DefaultMessages/SnakeBiteRemedy";
import Symptoms from "./DefaultMessages/Symptoms";
import VenomousSnake from "./DefaultMessages/VenomousSnake";
import React from 'react'
const config = {
  initialMessages: [createChatBotMessage("Hello. I am a chatbot")],
  botName: "Mythic Bot",
  state: {
    symptoms: [],
    remedy: [],
    venomous: []
  },
  widgets: [
    {
      widgetName: 'snake bite symptoms',
      widgetFunc: (props) => <Symptoms {...props} />,
      mapStateToProps: ['symptoms']
    },
    {
      widgetName: 'snake bite remedy',
      widgetFunc: (props) => <SnakeBiteRemedy {...props} />,
      mapStateToProps: ['remedy']
    },
    {
      widgetName: "venomus snake",
      widgetFunc: (props) => <VenomousSnake {...props} />,
      mapStateToProps: ['venomous']
    }
  ]

}

export default config