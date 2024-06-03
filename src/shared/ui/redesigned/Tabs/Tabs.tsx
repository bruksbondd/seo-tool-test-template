import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';
import { Text } from '../Text';

export interface TabItem {
    value: string;
    content: ReactNode;
    name: string;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    title?: string;
    onTabClick: (value: string) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        title,
        onTabClick,
        value,
        direction = 'row',
    } = props;
    const { t } = useTranslation();

    const clickHandle = useCallback(
        (value: string) => () => {
            onTabClick(value);
        },
        [onTabClick],
    );

    const isFullWidth = tabs.length > 2 ? true : false

    return (
        <Flex
            direction={direction}
            gap="8"
            align="start"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {title && (
                <Text size="l" align='center' bold className={cls.nameTabBlock} title={t(title)} />
            )}
            <div className={`${cls.tabsHeader} ${isFullWidth && cls.tabsHeaderFull}`}>
                {tabs.map((tab) => {
                    const isSelected = tab.value === value;
                    return (
                        <Button
                            key={tab.name}
                            variant="clear"
                            className={`${cls.tabButon} ${
                                isSelected && cls.tabButonAct
                            }`}
                            
                            onClick={clickHandle(tab.value)}
                        >
                            {tab.name}
                        </Button>
                    );
                })}
            </div>
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <div key={tab.name}>
                        {isSelected && (
                            <Card
                                variant={'normal'}
                                className={classNames(cls.tab, {
                                    [cls.selected]: isSelected,
                                })}
                                key={tab.value}
                                border="round"
                            >
                                {tab.content}
                            </Card>
                        )}
                    </div>
                );
            })}
        </Flex>
    );
});
