import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import styles from './RelatedImages.module.css'
import RelatedImgInfo from '../RelatedImgInfo/RelatedImgInfo';

const RelatedImages = () => {

    const [img, setImg] = useState([]);
    const [currentPage] = useState(1);
    const [pageSize] = useState(6);

    const lastImg = currentPage * pageSize;
    const firstImg = lastImg - pageSize;
    const relatedImages = img.slice(firstImg, lastImg);

    useEffect(() => {
        axios.get('https://picsum.photos/v2/list')
          .then(resp => {
            setImg(resp.data);
          });
      }, []);

    return (
      <Grid container xs={12} className={styles.RelatedImg}>
           {relatedImages.map(e => 
            <RelatedImgInfo e={e} />)}
        </Grid>   
    )
}

export default RelatedImages;