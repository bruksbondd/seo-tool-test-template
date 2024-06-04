import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    keywordFormActions,
    keywordFormReducer,
} from '../../model/slices/keywordFormSlice';
import {
    getKeywordFormError,
    getKeywordFormText,
} from '../../model/selectors/keywordFormSelectors';
import cls from './AddKeywordForm.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import Keyword from '@/shared/assets/icons/keyword.svg';
import { Text } from '@/shared/ui/redesigned/Text';
import { getDataUrlTool } from '@/features/urlTool/model/services/getDataUrlTool';
import { urlFormReducer } from '@/features/urlTool/model/slices/addUrlFormSlice';
import { statusLoadingData } from '@/features/urlTool/model/selectors/urlFormSelectors';
import { Loader } from '@/shared/ui/deprecated/Loader';

export interface UrlFormProps {
    className?: string;
}

const reducers: ReducersList = {
    keywordForm: keywordFormReducer,
    urlForm: urlFormReducer,
};

const AddKeywordForm = memo((props: UrlFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const text = useSelector(getKeywordFormText);
    const error = useSelector(getKeywordFormError);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(statusLoadingData);

    const onKeywordChange = useCallback(
        (value: string) => {
            dispatch(keywordFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        dispatch(getDataUrlTool(text));
    }, [onKeywordChange, text]);

    const AddonIcon = () => {
        return (
            <div className={cls.iconBg}>
                <Keyword />
            </div>
        );
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card className={cls.UrlForm} border="partial" fullWidth>
                <Text
                    size="s"
                    className={cls.nameBlock}
                    title={t('Enter keyword')}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Start typing...')}
                    value={text}
                    addonLeft={<AddonIcon />}
                    onChange={onKeywordChange}
                />

                <Button
                    variant="clear"
                    className={cls.sendButon}
                    onClick={onSendHandler}
                >
                   {isLoading ? <Loader /> : t('Check Keyword Density')}
                </Button>
            </Card>
        </DynamicModuleLoader>
    );
});

export default AddKeywordForm;
