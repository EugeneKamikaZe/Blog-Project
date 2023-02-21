import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Buton/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Text title={t('login_form')} />
            {
                error && <Text text={t('login_invalid')} theme={TextTheme.ERROR} />
            }
            <Input
                type="text"
                isAutoFocus
                placeholder={t('type_username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                placeholder={t('type_password')}
                onChange={onChangePassword}
                value={password}
            />

            <Button
                theme={ButtonTheme.OUTLINE}
                className={s.loginBtn}
                onClick={onLoginClick}
            >
                {t('sign_in')}
            </Button>
        </div>
    );
});
