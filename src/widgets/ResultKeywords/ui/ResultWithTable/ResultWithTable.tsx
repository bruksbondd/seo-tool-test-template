import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ResultWithTable.module.scss';

import { VStack } from '@/shared/ui/redesigned/Stack';

import { Tabs } from '@/shared/ui/redesigned/Tabs';
import ExportData from '@/features/ExportTable/ui/ExportData/ExportData';

interface ResultWithTableProps {
    className?: string;
    title?: string;
    tabs?: any;
    value: string
    addButton?: boolean
}

export const ResultWithTable = memo(
    (props: ResultWithTableProps) => {
        const { className, title, tabs, value, addButton = false } = props;
        const [activeTab, setActiveTab] = useState(value)
        return (
            <VStack
            
                gap="4"
                align='start'
                className={classNames(cls.ResultWithTable, {}, [
                    className,
                ])}
            >
               <Tabs onTabClick={setActiveTab} tabs={tabs} title={title} value={activeTab}/>
               {addButton && <ExportData />}
            </VStack>
        );
    },
);
