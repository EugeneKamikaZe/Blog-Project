import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Buton/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: isCollapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                className={s.collapseBtn}
                onClick={handleToggle}
                size={ButtonSize.L}
                isSquare
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {isCollapsed ? '>' : '<'}
            </Button>

            <div className={s.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.main}
                    className={s.item}
                >
                    <MainIcon className={s.icon} />
                    <span className={s.link}>
                        {t('link_home')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.about}
                    className={s.item}
                >
                    <AboutIcon className={s.icon} />
                    <span className={s.link}>
                        {t('link_about')}
                    </span>
                </AppLink>
            </div>

            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} isShort={isCollapsed} />
            </div>
        </div>
    );
};
