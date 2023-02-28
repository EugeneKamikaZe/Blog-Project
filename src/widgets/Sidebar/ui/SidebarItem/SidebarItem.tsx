import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SideBarItemType } from '../../model/items';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SideBarItemType,
    collapsed: boolean,
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(s.item, { [s.collapsed]: collapsed })}
        >
            <item.Icon className={s.icon} />
            <span className={s.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
