import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={classes.Navbar}>
            <div className={classes.NavbarWrapper}>
                <div className={classes.LogoSection}>
                    <a href="/"><img className={classes.Logo} src="https://assessments.edyoda.com/static/images/logo.png" alt="Edyoda Logo" /></a>
                    <div className={classes.NavSection}>
                        <span className={classes.MenuItems}>Practice Arena</span>
                        <span className={classes.MenuItems}>Classroom</span>
                        <span className={classes.MenuItems}>View Jobs</span>
                    </div>
                </div>
                <div className={classes.AccountSection}>
                    <div className={classes.Notification}>
                        <i className={["far", "fa-bell" , classes.Bell].join(' ')}></i>
                        <div className={classes.CountWrapper}><p className={classes.NotificationCount}>0</p></div>
                    </div>
                    <div className={classes.Username}><p>A<i className={["fas", "fa-caret-down" , classes.Dropdown].join(' ')}></i></p></div>
                </div>
        </div>
        </header>
    )
}

export default Navbar ;