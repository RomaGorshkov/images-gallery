import React, { useEffect, useState } from 'react';
import styles from '../Item/Item.module.css';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router';
import Preloader from '../Common/Preloader/Preloader';

const Item = () => {


  const [imgInfo, setInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://picsum.photos/id/${id}/info`)
      .then(resp => {
        setInfo(resp.data);
      });
  }, [id]);

  if (!imgInfo.download_url) {
    return <Preloader />
  }

  return (
    <Grid container className={styles.item} xs={12} key={id}>
        <Grid className={styles.itemPhoto}>
          <img alt='itemMainPhoto' src={imgInfo.download_url} />
        </Grid>
        <Grid className={styles.itemInfo}>
          <li>ID: {imgInfo.id}</li>
          <li>Author: {imgInfo.author}</li>
          <li>Width: {imgInfo.width}</li>
          <li>Height: {imgInfo.height}</li>
          <li>URL: {imgInfo.url}</li>
        </Grid>
    </Grid>
  )
}

export default Item;