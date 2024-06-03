import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ToolsUrl } from '@/entities/Tools';
import { getSeoToolUrl } from '@/entities/Tools';



export const fetchDataForUrl = createAsyncThunk<
    ToolsUrl,
    string,
    ThunkConfig<string>
    >(
        'seoToools/fetchDataForUrl',
        async (url, thunkApi) => {
            const {
                extra, dispatch, rejectWithValue, getState,
            } = thunkApi;

            const article = getSeoToolUrl(getState());

            if (!url) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<ToolsUrl>('todos', {
                    url,
                    // incudeMetaTags,
                    // includeTitles,
                    // includeAlttitles,
                    // excludeKeywords
                });

                if (!response.data) {
                    throw new Error();
                }

                // dispatch(fetchCommentsByArticleId(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
