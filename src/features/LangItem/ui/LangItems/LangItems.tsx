import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './LangItems.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { useLangItems } from '@/entities/Language/model/selectors/getLanguageItems';

import { Text } from '@/shared/ui/redesigned/Text';

export interface ListItem<T extends string> {
    value: string;
    name: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface LangItemsProps<T extends string> {
    className?: string;
    label?: string;
}

export const LangItems = memo(<T extends string>(props: LangItemsProps<T>) => {
    const {
        className,

        label,
    } = props;
    const { t, i18n } = useTranslation();
    const languageItemsList = useLangItems();

    const handlelanguage = (lang?: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={classNames(cls.ListLanguage, {}, [className])}>
            <Text className={cls.titlaLang} title={label} />

            <VStack gap="5">
                {languageItemsList?.map((item) => {
                    return (
                        <div
                            key={item.name}
                            onClick={() => handlelanguage(item.value)}
                            className={`${
                                item.value === i18n.language
                                    ? cls.buttonLangAct
                                    : cls.buttonLang
                            }`}
                        >
                            <Icon
                                onClick={() => {}}
                                className={cls.collapseBtn}
                                width={44}
                                height={44}
                                Svg={item.icon}
                                clickable
                            />
                            <Text
                                className={cls.textLang}
                                text={t(item.name)}
                                size='m'
                            />
                        </div>
                    );
                })}
            </VStack>
        </div>
    );
});
