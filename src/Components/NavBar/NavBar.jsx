import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './NavBar.module.css';
import Items from '../Items/Items';

const NavBar = ({currentImg}) => {

  return (
    <Grid className={styles.NavBar}>
      <Grid container className={styles.body} >
        {currentImg.map(i =>
          <Items i={i} />
        )}
      </Grid>
    </Grid>
  )
};

export default NavBar;