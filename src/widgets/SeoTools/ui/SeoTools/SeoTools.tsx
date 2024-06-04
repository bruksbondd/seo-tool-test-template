import { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SeoTools.module.scss';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { Tabs } from '@/shared/ui/redesigned/Tabs';

import { AddTextForm } from '@/features/textTool';
import AddKeywordForm from '@/features/keywordTool/ui/AddKeywordForm/AddKeywordForm';
import { ResultWithTable } from '@/widgets/ResultKeywords';
import { TableResult } from '@/features/table/ui/TableResult/TableResult';
import ExportData from '@/features/ExportTable/ui/ExportData/ExportData';
import { UrlForm } from '@/features/urlTool';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getRecivedUrlData,
    statusLoadingData,
} from '@/features/urlTool/model/selectors/urlFormSelectors';

interface SeoToolsProps {
    className?: string;
 
    createdAt?: string;
    views?: number;
    onEdit?: () => void;
}

const data = [
    {
        id: 1,
        frequency: 3,
        keyword: 'Tools charts',
        title: true,
        density: '74%',
        description: true,
        h: '<H*>',
    },
    {
        id: 2,
        frequency: 3,
        keyword: 'Options crypto',
        title: false,
        density: '74%',
        description: true,
        h: '<H*>',
    },
    {
        id: 3,
        frequency: '3',
        keyword: 'Currency crypto',
        density: '74%',
        title: true,
        description: false,
        h: '<H*>',
    },
    {
        id: 4,
        frequency: '3',
        keyword: 'Good value',
        density: '74%',
        title: true,
        description: true,
        h: '<H*>',
    },
    {
        id: 5,
        frequency: '3',
        keyword: 'Connect sign email',
        density: '74%',
        title: true,
        description: false,
        h: '<H*>',
    },
    {
        id: 6,
        frequency: '3',
        keyword: 'Digital options',
        density: '74%',
        title: true,
        description: false,
        h: '<H*>',
    },
    {
        id: 7,
        frequency: '3',
        keyword: 'Forex trading',
        density: '74%',
        title: true,
        description: false,
        h: '<H*>',
    },
    {
        id: 8,
        frequency: '3',
        keyword: 'Trading author',
        density: '74%',
        title: true,
        description: false,
        h: '<H*>',
    },
    {
        id: 9,
        frequency: '3',
        keyword: 'Forex trading 2',
        density: '74%',
        title: true,
        description: false,
        h: '<H*>',
    },
    {
        id: 10,
        frequency: '3',
        keyword: 'Trading author 3',
        density: '74%',
        title: true,
        description: false,
        h: '<H*>',
    },
];

const data2 = [
    {
        id: 1,
        frequency: '4',
        keyword: '1988',
        title: true,
        description: true,
        density: '74%',
        h: '<H*>',
    },
    {
        id: 2,
        frequency: '3',
        keyword: '1984',
        title: false,
        description: true,
        density: '78%',
        h: '<H*>',
    },
    {
        id: 3,
        frequency: '3',
        keyword: '1988',
        title: true,
        description: false,
        density: '74%',
        h: '<H*>',
    },
];


export const SeoTools = memo((props: SeoToolsProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const tableRef = useRef<HTMLInputElement>(null);

    const tableScroll = () => tableRef?.current?.scrollIntoView() 

    const [activeTab, setActiveTab] = useState('URL');
    const recivedData = useSelector(getRecivedUrlData);
    

    const tabs = [
        { value: 'URL', name: 'URL', content: <UrlForm /> },
        { value: 'TEXT', name: 'TEXT', content: <AddTextForm /> },
        { value: 'SEARCH', name: 'SEARCH BASED', content: <AddKeywordForm /> },
    ];

    const tabsTopKeywords = [
        {
            value: 'ANALYSIS',
            name: 'ANALYSIS',
            content: <TableResult data={data} />,
        },
        {
            value: 'AI_TEXT_OPTIMIZER',
            name: 'AI TEXT OPTIMIZER',
            content: <TableResult data={data2} />,
        },
    ];

    const tabsTopKeywordsDensity = [
        {
            value: '1WORD',
            name: '1 WORD',
            content: <TableResult density={true} data={data} />,
        },
        {
            value: '2WORD',
            name: '2 WORD',
            content: <TableResult density={true} data={data2} />,
        },
        {
            value: '3WORD',
            name: '3 WORD',
            content: <TableResult density={true} data={data} />,
        },
        {
            value: '4WORD',
            name: '4 WORD',
            content: <TableResult density={true} data={data} />,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            tableScroll()
        }, 200);

    }, [recivedData])


    return (
        <VStack
            gap="32"
            align="start"
            className={classNames(cls.SeoTools, {}, [className])}
        >
            <Tabs
                className={cls.lBlock}
                onTabClick={setActiveTab}
                tabs={tabs}
                value={activeTab}
            />

            {recivedData?.length ? (
                <div ref={tableRef}>
                    <ResultWithTable
                        
                        tabs={tabsTopKeywords}
                        title="Top Keywords"
                        value="ANALYSIS"
                    />

                    <ResultWithTable
                        tabs={tabsTopKeywordsDensity}
                        title="Keyword Density"
                        value="1WORD"
                        addButton={true}
                    />
                </div>
            ) : null}
        </VStack>
    );
});
