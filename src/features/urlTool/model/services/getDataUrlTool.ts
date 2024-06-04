import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { ToolsUrl } from '@/entities/Tools';


export const getDataUrlTool = createAsyncThunk<
    ToolsUrl,
    string,
    ThunkConfig<string>
>('urlForm/getDataUrlTool', async (url, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    if (!url) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.get<ToolsUrl>('/users' );
        
        if (!response.data) {
            throw new Error();
        }

        // dispatch(addUrlFormActions.setRecivedUrlData(response.data));
       

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
