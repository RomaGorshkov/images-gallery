import React from 'react';
import { Grid } from '@material-ui/core';
import Styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Grid className={Styles.Header}>
            <Grid className={Styles.HeaderBody}>
                <NavLink to='' className={Styles.Home}>
                    <div className={Styles.HeaderTitle}>Home</div>
                </NavLink>
            </Grid>
        </Grid>
    )
};

export default Header;