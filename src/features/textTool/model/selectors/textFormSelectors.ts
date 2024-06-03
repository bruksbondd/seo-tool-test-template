import { StateSchema } from '@/app/providers/StoreProvider';

export const getTextFormText = (state: StateSchema) =>
    state.keywordForm?.text ?? '';
export const getTextFormError = (state: StateSchema) =>
    state.keywordForm?.error;
