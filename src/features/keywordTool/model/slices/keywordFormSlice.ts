import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeywordFormSchema } from '../types/keywordForm';

const initialState: KeywordFormSchema = {
    text: '',
};

export const keywordFormSlice = createSlice({
    name: 'keywordForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: keywordFormActions } = keywordFormSlice;
export const { reducer: keywordFormReducer } = keywordFormSlice;