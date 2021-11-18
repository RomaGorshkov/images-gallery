import React from 'react';
import { Grid } from '@material-ui/core';
import styles from '../Pagination/Pagination.module.css';

const Pagination = ({ pageSize, totalImg, currentPage ,paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImg / pageSize); i++) {
    pageNumbers.push(i)
  }

  return (
    <Grid>
      <ul className={styles.pagination}>
        {
          pageNumbers.map(number => (
            <li className={styles.pageItem} key={number}>
              <a href='#!' className={currentPage === number && styles.pageLink} onClick={() => paginate(number)}>{number}</a>
            </li>
          ))
        }
      </ul>
    </Grid>
  )
}

export default Pagination;