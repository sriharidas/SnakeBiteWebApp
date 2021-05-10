import React from 'react'
import {SnakeBiteRemedies} from './../../../Items'

export default function SnakeBiteRemedy() {
    return (
        <div>
            <ul style={{margin: '8px 0'}}>
               {
                   SnakeBiteRemedies.map( symptom => (
                       <li style={{margin: '8px 0'}} key={symptom}>{symptom}</li>
                   ))
               }
           </ul>
        </div>
    )
}
