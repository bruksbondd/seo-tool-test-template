import { StateSchema } from '@/app/providers/StoreProvider';

export const getTextFieldText = (state: StateSchema) =>
    state.textField?.text ?? '';
export const getTextFieldError = (state: StateSchema) =>
    state.textField?.error;
