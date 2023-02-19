import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Buton/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input
                type="text"
                isAutoFocus
                placeholder={t('type_username')}
            />
            <Input
                type="text"
                placeholder={t('type_password')}
            />

            <Button className={s.loginBtn}>
                {t('sign_in')}
            </Button>
        </div>
    );
};
