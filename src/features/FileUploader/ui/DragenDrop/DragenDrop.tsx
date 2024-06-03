import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback, useState, DragEvent, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/redesigned/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getUploaderFileError } from '../../model/selectors/getUploaderFileError/getUploaderFileError';


import cls from './DragenDrop.module.scss';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import Upload from '@/shared/assets/icons/uploader.svg';

export const DragenDrop = ({
    onFilesSelected,
    width,
    height,
    className,
    error,
}: any) => {
    const { t } = useTranslation();
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: any) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
        }
    };
    const handleDrop = (event: any) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    useEffect(() => {
        onFilesSelected(files);
    }, [files, onFilesSelected]);

    return (
        <VStack
            gap="16"
            className={classNames(cls.Uploader, {}, [className])}
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
        >
            <Upload width={114} height={79} />
            <Text
                className={cls.textLang}
                title={t('Drag and drop files here')}
            />
            <div className={cls.textSeparate}>
                <span></span>
                <Text size="l" text={t('or')} />
                <span></span>
            </div>

            {error && (
                <Text
                    text={t(
                        'Limit 15MB per file. Supported files: .PDF, .DOCX, .PPTX, .TXT',
                    )}
                    variant="error"
                />
            )}

            <Button variant="clear" className={cls.uploadButton}>
                <input
                    type="file"
                    hidden
                    id="browse"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.pptx,.txt,.xlsx"
                    multiple
                />
                <label htmlFor="browse" className="browse-btn">
                    {t('Browse files')}
                </label>
            </Button>

            
        </VStack>
    );
};
