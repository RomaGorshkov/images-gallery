import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import Styles from './NavBar.module.css';
import Items from '../Items/Items';

const NavBar = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=1&limit=9')
      .then(resp => {
        const allImg = resp.data;
        setState(allImg);
      });
  }, [setState]);

  return (
    <Grid container xs={12} xl={4} className={Styles.body}>
      {state.map(i =>
        <Items i={i} />
      )}
    </Grid>
  )
};

export default NavBar;