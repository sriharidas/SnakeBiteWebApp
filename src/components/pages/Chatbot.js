import React from 'react'
import {Chatbot as ChatBot} from 'react-chatbot-kit'
import Config from './../Chatbot/Config'
import MessageParser from './../Chatbot/MessageParser'
import ActionProvider from './../Chatbot/ActionProvider'
import './../Chatbot/chatbot.css'

export default function Chatbot(props) {
    console.log(props)
    return (
     <ChatBot config={Config}  messageParser={MessageParser}  actionProvider={ActionProvider} styles={{width: '500px'}} />
    )
}
