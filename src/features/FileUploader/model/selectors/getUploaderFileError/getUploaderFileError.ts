import { StateSchema } from '@/app/providers/StoreProvider';

export const getUploaderFileError = (state: StateSchema) => state?.uploaderFile?.error;
