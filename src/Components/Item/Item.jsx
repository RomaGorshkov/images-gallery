import React from 'react';
import styles from '../Item/Item.module.css'
import { Grid } from '@material-ui/core';

const Item = (props) => {
    return (
        <Grid className={styles.item} onClick={console.log(props.state.id)}>
            123
        </Grid>
    )
}

export default Item;