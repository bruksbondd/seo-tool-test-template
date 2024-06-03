import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { LanguageSelect } from '@/entities/Language';
import { SeoTools } from '@/widgets/SeoTools';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './SeoToolsPage.module.scss'
const SeoToolsPage = () => {
    const { t } = useTranslation();
   

    return (
        <Page>
            <HStack  className={cls.SeoTools}>
                
                <SeoTools />
                
                <LanguageSelect />
            </HStack>
        </Page>
    );
};

export default SeoToolsPage;
