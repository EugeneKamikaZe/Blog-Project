import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Buton/Button';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: isCollapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={handleToggle}
            >
                toggle
            </Button>

            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
};
