import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';

import { Button } from '@/shared/ui/redesigned/Button';

interface LangSelectItemProps {
    className?: string;
    short?: boolean;
}

export const LangSelectItem = memo(({ className, short }: LangSelectItemProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        
                <Button onClick={toggle} variant="clear">
                    {t(short ? 'Короткий язык' : 'Язык')}
                </Button>
           
    );
});
