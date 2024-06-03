import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {  VStack } from '@/shared/ui/redesigned/Stack';
import {
    TextFieldActions,
    TextFieldReducer,
} from '../../model/slices/TextFieldSlice';
import {
    getTextFieldError,
} from '../../model/selectors/TextFieldSelectors';
import cls from './TextField.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import Recucle from '@/shared/assets/icons/recucle.svg';
import Upload from '@/shared/assets/icons/upload.svg';
import Aa from '@/shared/assets/icons/Aa.svg';
import { UploaderModal } from '@/features/FileUploader';

export interface TextFieldProps {
    className?: string;
    title?: string;
}

const reducers: ReducersList = {
    textField: TextFieldReducer,
};

const TextField = memo((props: TextFieldProps) => {
    const { className, title } = props;
    const { t } = useTranslation();
    const error = useSelector(getTextFieldError);
    const dispatch = useAppDispatch();
    const maxLength = 2000;
    const [count, setCount] = useState(0);

    const [isAuthModal, setIsAuthModal] = useState(false);
    const [text, setText] = useState('');

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onTextChange = useCallback(
        (value: string) => {
            setText(value);
            dispatch(TextFieldActions.setText(value));
            setCount(value.length);
        },
        [dispatch, text],
    );

    const onClearHandler = useCallback(() => {
        setText('');
        onTextChange('');
    }, [onTextChange, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card className={cls.wraperTextarea} border="partial" fullWidth>
                <VStack
                    justify="between"
                    max
                    className={classNames(cls.AddCommentFormRedesigned, {}, [
                        className,
                    ])}
                >
                    {title && (
                        <Text
                            size="s"
                            className={cls.nameBlock}
                            title={t(title)}
                        />
                    )}

                    <div className={cls.TextField}>
                        <textarea
                            className={cls.textarea}
                            rows={9}
                            maxLength={maxLength}
                            placeholder="Put text here..."
                            onChange={(e) => onTextChange(e.target.value)}
                            value={text}
                        ></textarea>
                        <div className={cls.botomControl}>
                            <div
                                className={cls.recucle}
                                onClick={onClearHandler}
                            >
                                <Recucle width={20} height={20} /> Clear
                            </div>
                            <div className={cls.upload} onClick={onShowModal}>
                                <Upload width={20} height={20} />
                                Upload
                            </div>
                            <div className={cls.calcChar}>
                                <Aa width={20} height={20} />
                                Number of words {count}/{maxLength}
                            </div>
                        </div>
                    </div>
                </VStack>
            </Card>
            {isAuthModal && (
                <UploaderModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </DynamicModuleLoader>
    );
});

export default TextField;
