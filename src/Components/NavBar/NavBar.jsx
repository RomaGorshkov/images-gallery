import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from './NavBar.module.css';
import Items from '../Items/Items';
import axios from 'axios';
import Preloader from '../Common/Preloader/Preloader';

const NavBar = () => {

  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if(fetching) {
      axios.get( `https://picsum.photos/v2/list?page=${currentPage}&limit=10`)
        .then(resp => {
          setState([...state, ...resp.data]);
          setCurrentPage(prevState => prevState + 1);
          setTotalCount(resp.headers['x-total-count'])
        })
        .finally(() => setFetching(false))
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandel);
    return function() {
      document.removeEventListener('scroll', scrollHandel)
    };
  }, [])

  const scrollHandel = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop * window.innerHeight) < 150 )
    setFetching(true)
  }

  if (!state.length) {
    return <Preloader />
  }

  return (
    <Grid className={styles.NavBar}>
      <Grid container className={styles.body} >
        {state.map(i =>
          <Items i={i} />
        )}
      </Grid>
    </Grid>
  )
};

export default NavBar;