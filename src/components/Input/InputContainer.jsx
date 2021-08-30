import React, { useState } from 'react';
import {Paper, Typography, Collapse} from '@material-ui/core';
import {makeStyles, alpha} from '@material-ui/core/styles';
import InputCard from './InputCard';


const useStyle = makeStyles((theme)=>({
    root: {
        marginTop: theme.spacing(1),
    },
    addCard: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(0,1,1,1),
        background: 'rgba(0,0,0,0)',
        "&:hover":{
            backgroundColor: alpha('#000',0.25),
        },
    },
}));

const InputContainer = ({listId})=>{
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId} /> 
            </Collapse>
            <Collapse in={!open}>
                <Paper 
                    className={classes.addCard}
                    elevation={0}
                    onClick={()=>setOpen(!open)}
                    >
                    <Typography>
                        + Añade una tarjeta
                    </Typography>
                </Paper>
            </Collapse>

        </div>
    )
}

export default InputContainer;