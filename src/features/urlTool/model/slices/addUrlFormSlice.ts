import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UrlFormSchema } from '../types/urlForm';
import { getDataUrlTool } from '../services/getDataUrlTool';

const initialState: UrlFormSchema = {
    url: '',
    recivedUrlData: [],
    error: '',
    isLoading: false
};

export const addUrlFormSlice = createSlice({
    name: 'urlForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.url = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setRecivedUrlData: (state, action: PayloadAction<any>) => {
            state.recivedUrlData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataUrlTool.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getDataUrlTool.fulfilled, (state, action) => {
                console.log('response', action.payload);
                state.isLoading = false;
                state.recivedUrlData = action.payload;
                
            })
            .addCase(getDataUrlTool.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: addUrlFormActions } = addUrlFormSlice;
export const { reducer: urlFormReducer } = addUrlFormSlice;
