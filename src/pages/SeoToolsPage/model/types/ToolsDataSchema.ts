import { EntityState } from '@reduxjs/toolkit';
import { ToolsUrl } from '@/entities/Tools';

export interface TolsDataSchema extends EntityState<ToolsUrl>{
    isLoading?: boolean;
    error?: string;
}
