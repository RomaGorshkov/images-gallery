import React from 'react';
import preloader from '../../../assets/preloader.gif';
import styles from '../Preloader/Preloader.module.css'

let Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img alt='preloader' src={preloader} />
    </div>
  )
}

export default Preloader;