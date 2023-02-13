import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(s.NavBar, {}, [className])}>
        <div className={s.links}>
            /
        </div>
    </div>
);
