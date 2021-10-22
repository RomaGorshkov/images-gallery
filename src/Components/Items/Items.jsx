import React, { useState } from 'react';
import Styles from '../Items/Items.module.css';
import heart from '../../assets/heart.png';
import { Grid } from '@material-ui/core';

const Items = (props) => {

    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(count === 0 ? count + 1 : count - 1)
    };

    return (
        <Grid className={Styles.list} key={props.i.id}>
            <Grid className={Styles.name}><h4>{props.i.author}</h4></Grid>
            <Grid><img alt='mainPhoto' src={props.i.download_url} className={Styles.mainPhoto} /></Grid>
            <Grid className={Styles.icons}>
                <img alt='heart' src={heart} onClick={changeCount} />
                <h4>{count}</h4>
            </Grid>
        </Grid>
    )
}

export default Items;