import { FC, lazy } from 'react';
import { UploaderProps } from './Uploader';

export const UploaderAsync = lazy<FC<UploaderProps>>(
    () => import('./Uploader'),
);
