import React from 'react';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    card: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(1),
    }
}));

const Card = (props) => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.card}>
                Making a Youtube video
            </Paper>
        </div>
    )
}

export default Card;