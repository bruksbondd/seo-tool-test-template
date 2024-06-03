import { StateSchema } from '@/app/providers/StoreProvider';

export const getUrlFormUrl = (state: StateSchema) =>
    state.urlForm?.url ?? '';
export const getRecivedUrlData = (state: StateSchema) =>
    state.urlForm?.recivedUrlData;
export const getUrlFormError = (state: StateSchema) =>
    state.urlForm?.error;
export const statusLoadingData = (state: StateSchema) =>
    state.urlForm?.isLoading;
