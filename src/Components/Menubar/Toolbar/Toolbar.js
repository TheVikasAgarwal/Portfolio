import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';

import DrawerToggle from '../DrawerToggle/DrawerToggle';

import SocialMedia from '../SocialMedia/SocialMedia';
import Navbar from '../../NavBar/Navbar';

const toolbar = ( props ) => (
    <header className={classes.Toolbar} style={{alignContent: 'center'}}>
        {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
        <div style={{fontWeight: 900}}>
            Vikas Agarwal
        </div>
        {/* <nav className={classes.forsp} style={{marginLeft: 90}}>
        <Navbar/>
        </nav> */}
        <nav className={classes.DesktopOnly}>
            <SocialMedia/>
        </nav>
    </header>
);

export default toolbar;