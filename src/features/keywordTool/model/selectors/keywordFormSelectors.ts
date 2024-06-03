import { StateSchema } from '@/app/providers/StoreProvider';

export const getKeywordFormText = (state: StateSchema) =>
    state.keywordForm?.text ?? '';
export const getKeywordFormError = (state: StateSchema) =>
    state.keywordForm?.error;
