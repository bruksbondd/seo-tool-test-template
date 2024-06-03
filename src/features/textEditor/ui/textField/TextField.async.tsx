import { FC, lazy } from 'react';
import { TextFieldProps } from './TextField';

export const TextFieldAsync = lazy<FC<TextFieldProps>>(
    () => import('./TextField'),
);
