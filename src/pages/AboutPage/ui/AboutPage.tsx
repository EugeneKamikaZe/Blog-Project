import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string;
}

const AboutPage = memo(({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
});

export default AboutPage;
