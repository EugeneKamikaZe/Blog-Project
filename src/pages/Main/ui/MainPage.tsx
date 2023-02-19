import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from 'pages/NotFound/ui/NotFound.module.scss';
import { Counter } from 'entities/Counter';

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(s.MainPage, {}, [className])}>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default MainPage;
