import React from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import './textfield.style.scss'

function TextFieldCustom({type, placeholder, onChange, value, multiline = false, minRows = 1}) {
    return (
                <TextField id="custom-css-outlined-input" 
                    label= {placeholder} 
                    variant="filled"
                    onChange={(e) => onChange(e)}
                    value={value}
                    type={type}
                    multiline={multiline}
                    minRows = {minRows}
                    sx={{backgroundColor: "rgb(255, 255, 255)", fill: "white"}}
                />
    )
}

export default TextFieldCustom
