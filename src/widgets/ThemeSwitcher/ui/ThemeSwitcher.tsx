import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/theme-dark.svg';
import LightIcon from 'shared/assets/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Buton/Button';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames(s.ThemeSwitcher, {}, [className])}
        >
            {
                theme === Theme.DARK
                    ? <DarkIcon />
                    : <LightIcon />
            }
        </Button>
    );
};
