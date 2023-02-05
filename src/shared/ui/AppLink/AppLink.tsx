import {classNames} from "shared/lib/classNames/classNames";
import s from './AppLink.module.scss'
import {Link} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps {
    className?: string,
    to: string,
    theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
            ...otherProps
    } = props

    return (
        <Link to={to}
              className={classNames(s.AppLink, {}, [className, s[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};
