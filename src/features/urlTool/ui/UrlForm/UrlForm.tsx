import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import {
    addUrlFormActions,
    urlFormReducer,
} from '../../model/slices/addUrlFormSlice';

import cls from './UrlForm.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

import Link from '@/shared/assets/icons/link.svg';
import { Text } from '@/shared/ui/redesigned/Text';
import { Checkbox } from '@/features/checkbox';
import TextField from '@/features/textEditor/ui/textField/TextField';
import {
    getRecivedUrlData,
    getUrlFormError,
    getUrlFormUrl,
    statusLoadingData,
} from '../../model/selectors/urlFormSelectors';
import { useFetchUrlTool } from '@/pages/SeoToolsPage/api/urlToolApi';
import { validURL } from '@/shared/lib/scripts/scripts';
import { getDataUrlTool } from '../../model/services/getDataUrlTool';
import { Loader } from '@/shared/ui/deprecated/Loader';

export interface UrlFormProps {
    className?: string;
}

const reducers: ReducersList = {
    urlForm: urlFormReducer,
};

const UrlForm = memo((props: UrlFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const url = useSelector(getUrlFormUrl);
    // const isLoading = useSelector(statusLoadingData);
    const isLoading = true;
    
    const error = useSelector(getUrlFormError);
    const dispatch = useAppDispatch();

    const [incudeMetaTags, setIncudeMetaTags] = useState(false);
    const [includeTitles, setIncludeTitles] = useState(false);
    const [includeAlttitles, setIncludeAlttitles] = useState(false);
    const [errorUrl, setErrorUrl] = useState(false);

    const handleChangeOne = () => {
        setIncudeMetaTags(!incudeMetaTags);
    };

    const handleChangeTwo = () => {
        setIncludeTitles(!includeTitles);
    };

    const handleChangeThree = () => {
        setIncludeAlttitles(!includeAlttitles);
    };

    const onUrlChange = useCallback(
        (value: string) => {
            if (validURL(value)) {
                setErrorUrl(false);
            }
            dispatch(addUrlFormActions.setText(value));
        },
        [dispatch],
    );

    const [fetchUrlToolDataMutation, response] = useFetchUrlTool();

    const onSendHandler = useCallback(() => {
        if (!validURL(url)) {
            setErrorUrl(true);
            return null;
        }
        dispatch(getDataUrlTool(url));
    }, [url, getDataUrlTool, fetchUrlToolDataMutation]);

    const AddonIcon = () => {
        return (
            <div className={cls.iconBg}>
                <Link />
            </div>
        );
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card className={cls.UrlForm} border="partial" fullWidth>
                <Text
                    size="s"
                    className={cls.nameBlock}
                    title={t('Enter URL')}
                />
                <Input
                    className={`${cls.input} ${errorUrl ? cls.errorUrl : ''}`}
                    placeholder={t(
                        'Enter your URL like https://example.com...',
                    )}
                    value={url}
                    addonLeft={<AddonIcon />}
                    onChange={onUrlChange}
                />

                <div className={cls.includeBox}>
                    <Text
                        size="s"
                        semiBold
                        className={cls.nameInclude}
                        title={t('INCLUDE')}
                    />
                    <Checkbox
                        label="Incude Meta Tags"
                        value={incudeMetaTags}
                        name="IncudeMetaTags"
                        onChange={handleChangeOne}
                    />
                    <Checkbox
                        label="Include Titles"
                        name="IncludeTitles"
                        value={includeTitles}
                        onChange={handleChangeTwo}
                    />
                    <Checkbox
                        label="Include ALT titles"
                        name="IncludeALTtitles"
                        value={includeAlttitles}
                        onChange={handleChangeThree}
                    />
                </div>

                <TextField title={'Exclude Keywords (Optional)'} />

                <Button
                    variant="clear"
                    className={cls.sendButon}
                    onClick={() => onSendHandler()}
                >
                    {isLoading ? <Loader /> : t('Check Keyword Density')}
                   
                </Button>
            </Card>
        </DynamicModuleLoader>
    );
});

export default UrlForm;
