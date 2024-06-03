import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ListFiles.module.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Sucssed from '@/shared/assets/icons/sucssed.svg';
import Procces from '@/shared/assets/icons/procces.svg';

interface ListFilesProps {
    className?: string;
    files: File[];
}

export const ListFiles = ({ files, className }: ListFilesProps) => {
    const { t } = useTranslation();
    return (
        <VStack gap="16" className={cls.ListFiles}>
            <Text bold className={cls.textBlock} title={t('Uploaded files')} />

            {files.length > 0 && (
                <div className={cls.boxList}>
                    {files.map((file, index) => (
                        <div className={cls.itemFile} key={index}>
                            <div className={cls.fileStatus}>
                                <Sucssed width={22} height={16}/>
                                {/* <Procces width={22} height={16}/> */}
                            </div>
                            <div className={cls.fileInfo}>
                                <div className={cls.infoLine}>
                                    <p>{file.name}</p>
                                    <span className={cls.procent}>100%</span>
                                </div>

                                <div className={cls.progress}></div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </VStack>
    );
};
