import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from 'pages/NotFound/ui/NotFound.module.scss';

interface AboutPageProps {
    className?: string
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(s.AboutPage, {}, [className])}>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default AboutPage;
