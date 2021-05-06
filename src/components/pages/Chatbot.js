import {  Grid } from '@material-ui/core'
import React from 'react'
import {Chatbot as ChatBot} from 'react-chatbot-kit'
import Config from './../Chatbot/Config'
import MessageParser from './../Chatbot/MessageParser'
import ActionProvider from './../Chatbot/ActionProvider'


export default function Chatbot() {
    return (
        <Grid container justify="center" alignContent="space-around" alignItems="center" style={{height: '90vh', background:'#00000056'}}>
            <Grid item>
                <div >
                <ChatBot config={Config}  messageParser={MessageParser}  actionProvider={ActionProvider} />
                </div>
               
            </Grid>
        </Grid>
    )
}
