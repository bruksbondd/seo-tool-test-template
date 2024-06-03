import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { LanguageSelect } from '@/entities/Language';
import { SeoTools } from '@/widgets/SeoTools';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            <HStack align='start' justify='between'>
                
                <SeoTools />
                
                <LanguageSelect />
            </HStack>
        </Page>
    );
};

export default MainPage;
