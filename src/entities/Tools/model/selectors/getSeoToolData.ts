import { StateSchema } from '@/app/providers/StoreProvider';

// export const getSeoToolData = (state: StateSchema) => state.articleDetails?.data;
// export const getSeoToolIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;
// export const getSeoToolDetailsError = (state: StateSchema) => state.articleDetails?.error;
export const getSeoToolUrl = (state: StateSchema) => state.urlForm?.url;
export const getSeoToolIncludeTitles = (state: StateSchema) => state.urlForm?.includeTitles;