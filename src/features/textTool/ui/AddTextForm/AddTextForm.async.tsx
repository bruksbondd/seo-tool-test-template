import { FC, lazy } from 'react';
import { AddTextFormProps } from './AddTextForm';

export const AddTextFormAsync = lazy<FC<AddTextFormProps>>(
    () => import('./AddTextForm'),
);
