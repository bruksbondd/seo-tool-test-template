import { FC, lazy } from 'react';
import { ExportDataProps } from './ExportData';

export const ExportDataAsync = lazy<FC<ExportDataProps>>(
    () => import('./ExportData'),
);
