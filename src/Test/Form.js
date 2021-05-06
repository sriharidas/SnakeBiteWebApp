import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core'
import React, {useEffect, useState} from 'react'

export default function Form() {
    const [values, setValues] = useState({
        Radio: ''
    })
    const changeHandler = e => {
        
        setValues({
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form>
             <FormControl>
                 <FormLabel>Choose an option</FormLabel>
                 <RadioGroup value={values.Radio} row onChange = {changeHandler} color="primary">
                     <FormControlLabel control={<Radio name="Radio" value="Radio1" color="primary" />} label="Radio 1" />
                     <FormControlLabel control={<Radio name="Radio" value="Radio2" />} label="Radio 2" />
                     <FormControlLabel control={<Radio name="Radio" value="Radio3" color="primary" />} label="Radio 3" />
                 </RadioGroup>
             </FormControl>

             <FormControl>
                 <FormLabel>Select one or more options below</FormLabel>
                 <FormControlLabel  control={<Checkbox name="field"  label="box1"/>} />
                 <FormControlLabel  control={<Checkbox name="field"  label="box1"/>} />
                 <FormControlLabel  control={<Checkbox name="field"  label="box1"/>} />

             </FormControl>
            </form>
        </div>
    )
}
