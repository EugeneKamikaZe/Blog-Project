import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Buton/Button';
import { useTranslation } from 'react-i18next';
import s from './LangSwitche.module.scss';

interface LangSwitcherProps {
    className?: string;
    isShort?: boolean;
}

export const LangSwitcher = ({ className, isShort }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    // i18 брать только из useTranslation, иначе ломаются компоненты, использующие LangSwitcher

    const handleSwitch = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(s.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={handleSwitch}
        >
            {t(isShort ? 'shortLng' : 'language')}
        </Button>
    );
};
