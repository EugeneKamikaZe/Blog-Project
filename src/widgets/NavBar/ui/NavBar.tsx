import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import s from './NavBar.module.scss'

interface NavBarProps {
    className?: string
}

const NavBar = ({className}) => {
    return (
        <div className={classNames('navbar')}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </div>
    );
};

export default NavBar;
