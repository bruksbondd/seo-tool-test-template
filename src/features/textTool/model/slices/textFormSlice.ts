import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddTextFormSchema } from '../types/addTextForm';

const initialState:AddTextFormSchema = {
    text: '',
};

export const textFormSlice = createSlice({
    name: 'textForm',
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
export const { actions: textFormActions } = textFormSlice;
export const { reducer: textFormReducer } = textFormSlice;
