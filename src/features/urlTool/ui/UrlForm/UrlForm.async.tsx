import { FC, lazy } from 'react';
import { UrlFormProps } from './UrlForm';

export const UrlFormAsync = lazy<FC<UrlFormProps>>(
    () => import('./UrlForm'),
);
