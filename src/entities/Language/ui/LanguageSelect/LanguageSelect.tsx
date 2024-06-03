import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Language } from '../../model/types/language';
import { LangItems } from '@/features/LangItem/ui/LangItems/LangItems';

interface LanguageSelectProps {
    className?: string;
    value?: Language;
    onChange?: (value: Language) => void;
    readonly?: boolean;
}



export const LanguageSelect = memo(
    ({ className, value, onChange, readonly }: LanguageSelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Language);
            },
            [onChange],
        );

        const props = {
            className,
            label: t('LANGUAGE'),
            onChange: onChangeHandler,
        };

        return (
            <LangItems {...props} />
               
        );
    },
);
