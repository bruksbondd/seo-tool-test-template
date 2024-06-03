import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ContactPage = () => {
    const { t } = useTranslation('about');

    return <Page data-testid="ContactPage">{t('Contact')}</Page>;
};

export default ContactPage;
