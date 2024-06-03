import { rtkApi } from '@/shared/api/rtkApi';

interface ToosUrlArg {
    title?: string;
    userId?: number;
    body?: string;
}

export interface Post {
    id: string;
    name: string;
}

const urlToolApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUrlToolData: build.query<any, ToosUrlArg>({
            query: ({ title, body, userId }) => ({
                url: '/posts',
                params: {
                    userId,
                },
            }),
        }),
        fetchUrlToolData: build.mutation<any, ToosUrlArg>({
            query: (arg) => ({
                url: '/posts',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetUrlTool = urlToolApi.useGetUrlToolDataQuery;
export const useFetchUrlTool = urlToolApi.useFetchUrlToolDataMutation;
