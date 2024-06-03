import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';

interface BlogPageProps {
    className?: string;
}

const BlogPage = ({ className }: BlogPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    return (
        <Page
            className={classNames('', {}, [className])}
        >
            <VStack gap="16" max>
                <div>{t('About us')}</div>
            </VStack>
        </Page>
    );
};

export default BlogPage;
