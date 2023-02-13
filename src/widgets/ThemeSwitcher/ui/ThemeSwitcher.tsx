import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/theme-dark.svg';
import LightIcon from 'shared/assets/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Buton/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {
                theme === Theme.DARK
                    ? <DarkIcon />
                    : <LightIcon />
            }
        </Button>
    );
};
