import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddTextForm.module.scss';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

import TextField from '@/features/textEditor/ui/textField/TextField';
import { getDataUrlTool } from '@/features/urlTool/model/services/getDataUrlTool';
import { getTextFieldText } from '@/features/textEditor/model/selectors/TextFieldSelectors';
import { urlFormReducer } from '@/features/urlTool/model/slices/addUrlFormSlice';

export interface AddTextFormProps {
    className?: string;
}

const reducers: ReducersList = {
    // textForm: textFormReducer,
    urlForm: urlFormReducer,
};

const AddTextForm = memo((props: AddTextFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getTextFieldText);

    const onSendHandler = useCallback(() => {
        dispatch(getDataUrlTool(text));
    }, [getDataUrlTool, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card className={cls.UrlForm} border="partial" fullWidth>
                <TextField />

                <Button
                    variant="clear"
                    className={cls.sendButon}
                    onClick={onSendHandler}
                >
                    {t('Check Keyword Density')}
                </Button>
            </Card>
        </DynamicModuleLoader>
    );
});

export default AddTextForm;
