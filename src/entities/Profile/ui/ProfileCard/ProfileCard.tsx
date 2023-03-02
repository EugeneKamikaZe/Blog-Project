import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>
                <Text title={t('Профиль')} />
                <Button className={s.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Your Name')}
                    className={s.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your Name')}
                    className={s.input}
                />
            </div>
        </div>
    );
};
