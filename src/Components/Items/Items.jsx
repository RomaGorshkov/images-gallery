import React, { useState } from 'react';
import styles from '../Items/Items.module.css';
import heart from '../../assets/heart.png';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Items = ({ i: { id, author, download_url } }) => {

  const [count, setCount] = useState(0);

  const changeCount = () => setCount(!count ? count + 1 : count - 1);

  return (
    <Grid className={styles.list} xs={12} sm={4} md={3} key={id}>
      <Grid className={styles.name}><h4>{author}</h4></Grid>
      <NavLink to={'/image/' + id}>
        <Grid><img alt='mainPhoto' src={download_url} className={styles.mainPhoto} /></Grid>
      </NavLink>
      <Grid className={styles.icons}>
        <img alt='heart' src={heart} onClick={changeCount} />
        <h4>{count}</h4>
      </Grid>
    </Grid>
  )
}

export default Items;