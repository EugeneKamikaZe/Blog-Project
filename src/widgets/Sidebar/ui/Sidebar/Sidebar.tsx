import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Buton/Button';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={s.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                isSquare
            >
                {collapsed ? '>' : '<'}
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
                <LangSwitcher
                    isShort={collapsed}
                    className={s.lang}
                />
            </div>
        </div>
    );
};
