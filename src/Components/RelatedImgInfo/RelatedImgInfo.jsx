import React from 'react';
import styles from './RelatedImgInfo.module.css';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const RelatedImgInfo = ({e: {id, download_url}}) => {

    return (
        <Grid className={styles.RelatedImgInfo}>
            <NavLink to={`/image/${id}`}>
                <Grid><img alt='relatedImgInfo' src={download_url}/></Grid>
            </NavLink>
        </Grid>
    )
}

export default RelatedImgInfo;