import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FielsSchema } from '../types/fielsSchema';


const initialState: FielsSchema = {
    isLoading: false,
    name: '',
    type: '',
};

export const fileUploaderSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
       
    },
    
});

// Action creators are generated for each case reducer function
export const { actions: uploaderFileActions } = fileUploaderSlice;
export const { reducer: uploaderFileReducer } = fileUploaderSlice;
