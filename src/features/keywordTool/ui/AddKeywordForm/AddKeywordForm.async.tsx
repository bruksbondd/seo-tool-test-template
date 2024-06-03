import { FC, lazy } from 'react';
import { UrlFormProps } from './AddKeywordForm';

export const AddUrlFormAsync = lazy<FC<UrlFormProps>>(
    () => import('./AddKeywordForm'),
);
