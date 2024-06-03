import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const SeoCoursePage = () => {
    const { t } = useTranslation('about');

    return <Page data-testid="SeoCoursePage">{t('Seo Course')}</Page>;
};

export default SeoCoursePage;
