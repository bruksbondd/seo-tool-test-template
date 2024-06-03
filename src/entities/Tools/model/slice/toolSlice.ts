import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { ToolsUrl, ToolsUrlSchema } from '../types/tools';

const initialState: ToolsUrlSchema = {
    dataToolsUrl: {}
};

export const toolSlice = createSlice({
    name: 'tool',
    initialState,
    reducers: {
        setDataUrl: (state, { payload }: PayloadAction<ToolsUrl>) => {
            state.dataToolsUrl = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { actions: toolActions } = toolSlice;
export const { reducer: toolReducer } = toolSlice;
