import { Suspense } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { UploaderAsync } from '../Uploader/Uploader.async';

interface UploaderModaProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const UploaderModal = ({ className, isOpen, onClose }: UploaderModaProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <UploaderAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
