import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from './NavBar.module.css';
import Items from '../Items/Items';
import axios from 'axios';
import Preloader from '../Common/Preloader/Preloader';
import Pagination from '../Pagination/Pagination';

const NavBar = () => {

  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(resp => {
        setState(resp.data);
      });
  }, []);

  const lastImgIndex = currentPage * pageSize;
  const firstImgIndex = lastImgIndex - pageSize;
  const currentImg = state.slice(firstImgIndex, lastImgIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!state.length) {
    return <Preloader />
  }

  return (
    <Grid className={styles.NavBar}>
      <Grid container className={styles.body} >
        {currentImg.map(i =>
          <Items i={i} />
        )}
          <Pagination pageSize={pageSize}
            totalImg={state.length}
            currentPage={currentPage}
            paginate={paginate} />
      </Grid>
    </Grid>
  )
};

export default NavBar;