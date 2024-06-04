import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useState } from 'react';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getUploaderFileError } from '../../model/selectors/getUploaderFileError/getUploaderFileError';

import { uploaderFileReducer } from '../../model/slice/fileUploaderSlice';
import cls from './Uploader.module.scss';

import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { DragenDrop } from '../DragenDrop/DragenDrop';
import { ListFiles } from '../ListFiles/ListFiles';

export interface UploaderProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    uploaderFile: uploaderFileReducer,
};

const Uploader = memo(({ className, onSuccess }: UploaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const error = useSelector(getUploaderFileError);
    const forceUpdate = useForceUpdate();

    const [files, setFiles] = useState<File[]>([]);


    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <DragenDrop
                onFilesSelected={setFiles}
                error={error}
                width="300px"
                height="400px"
            />
            {files.length > 0 && <ListFiles files={files} />}
        </DynamicModuleLoader>
    );
});

export default Uploader;
