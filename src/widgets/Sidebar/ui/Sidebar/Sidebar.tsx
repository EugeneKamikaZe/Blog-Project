import {classNames} from "shared/lib/classNames/classNames";
import s from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleToggle = () => {
        setIsCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: isCollapsed}, [className])}>
            <button onClick={handleToggle}>toggle</button>

            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang}/>
            </div>
        </div>
    );
};
