import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={classes.Navbar}>
            <div className={classes.NavbarWrapper}>
                <div className={classes.LogoSection}>
                    <Link to="/"><img className={classes.Logo} src="https://assessments.edyoda.com/static/images/logo.png" alt="Edyoda Logo" /></Link>
                    <div className={classes.NavSection}>
                        <Link to="/" className={classes.MenuItems}>Practice Arena</Link>
                        <Link to="./classroom" className={classes.MenuItems}>Classroom</Link>
                        <Link to="/jobs" className={classes.MenuItems}>View Jobs</Link>
                    </div>
                </div>
                <div className={classes.AccountSection}>
                    <div className={classes.Notification}>
                        <i className={["far", "fa-bell" , classes.Bell].join(' ')}></i>
                        <div className={classes.CountWrapper}><span className={classes.NotificationCount}>0</span></div>
                    </div>
                    <div className={classes.MenuItems}><span>Group B<i className={["fas", "fa-caret-down" , classes.Dropdown].join(' ')}></i></span></div>
                </div>
        </div>
        </header>
    )
}

export default Navbar ;