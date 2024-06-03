import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {  VStack } from '@/shared/ui/redesigned/Stack';
import {
    TextFieldReducer,
} from '../../model/slices/TextFieldSlice';

import cls from './ExportData.module.scss';

import { Button } from '@/shared/ui/redesigned/Button';


export interface ExportDataProps {
    className?: string;
    title?: string
    // onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    textField: TextFieldReducer,
};

const ExportData = memo((props: ExportDataProps) => {
    const { className, title } = props;
    const { t } = useTranslation();


  

    const onExportHandler = () => {
        
    };

    const onSaveHandler = () => {
        
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            
                <VStack
                    justify="center"
                    max
                    className={classNames(cls.blockExport, {}, [
                        className,
                    ])}
                >
                    <Button variant='clear'  className={`${cls.button} ${cls.exportButon}`} onClick={onExportHandler}>{t('Export')}</Button>
                   <Button variant='clear' className={`${cls.button} ${cls.saveButon}`} onClick={onSaveHandler}>{t('Save Results')}</Button>
                   
                </VStack>
            
           
        </DynamicModuleLoader>
    );
});

export default ExportData;
