import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.NotFound, {}, [className])}>
            {t('not_found')}
        </div>
    );
};
