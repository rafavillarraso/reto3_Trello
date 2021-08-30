 import React, { useContext, useState } from 'react';
 import {Paper, InputBase, Button, IconButton } from '@material-ui/core';
 import ClearIcon from '@material-ui/icons/Clear';
 import {makeStyles, alpha} from '@material-ui/core/styles';
import storeApi from '../../store/storeApi';


 const useStyle = makeStyles((theme)=>({
    card: {
        padding: theme.spacing(0,1,1,1),
        paddingBottom: theme.spacing(1),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        backgroundColor: '#ff9900',
        color: '#ffffff',
        '&:hover':{
            background: alpha('#483D8B',0.25),
            color: alpha('#000000',0.90)
        }
    },
    confirm: {
        margin: theme.spacing(0,1,1,1),

    }
}));

 const InputCard=( {setOpen, listId} )=>{
    const classes = useStyle();
    const {addMoreCard} = useContext(storeApi);
    const [cardTitle,setCardTitle] = useState('');
    const handleOnChange = (e) => {
        setCardTitle(e.target.value);
    }
    const handleBtnConfirm =()=>{
        addMoreCard(cardTitle, listId);
        setCardTitle('');
        setOpen(false);
    };
    return(
         <div>
            <div className={classes.card}>
                <Paper className={classes.card}>
                    <InputBase 
                    onChange={handleOnChange}
                    multiline
                    onBlur={()=> setOpen(false)}
                    fullWith
                    inputProps={{
                        className: classes.input,
                    }}
                    value={cardTitle}
                    placeholder='introduce una tarea' />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>Añadir Tarea</Button>
                <IconButton onClick={()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
         </div>
     )
 }

 export default InputCard