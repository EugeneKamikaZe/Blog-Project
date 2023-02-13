import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Buton/Button';
import i18n from 'shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import s from './LangSwitche.module.scss';

interface LangSwitcherProps {
    className?: string;
    isShort?: boolean;
}

export const LangSwitcher = ({ className, isShort }: LangSwitcherProps) => {
    const { t } = useTranslation();

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
