import React, { useEffect, useState } from 'react';
import styles from '../Item/Item.module.css';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router';
import Preloader from '../Common/Preloader/Preloader';
import RelatedImages from '../RelatedImages/RelatedImages';

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
    <Grid  className={styles.item} key={id}>
        <Grid container xs={12} className={styles.itemPhoto}>
          <img alt='itemMainPhoto' src={imgInfo.download_url} />
        <ul className={styles.itemInfo}>
          <li>ID: {imgInfo.id}</li>
          <li>Author: {imgInfo.author}</li>
          <li>Width: {imgInfo.width}</li>
          <li>Height: {imgInfo.height}</li>
          <li>URL: {imgInfo.url}</li>
        </ul>
        </Grid>
        <Grid container className={styles.relatedImg}>
        <h2>Related images</h2>
          <RelatedImages />
      </Grid>
    </Grid>
  )
}

export default Item;