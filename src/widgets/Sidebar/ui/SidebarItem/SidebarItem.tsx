import { useTranslation } from 'react-i18next';
import { memo } from 'react';


import { classNames } from '@/shared/lib/classNames/classNames';

import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, {
                [cls.collapsed]: collapsed,
            })}
            activeClassName={cls.active}
        >
            <span className={cls.link}>{t(item.content)}</span>
        </AppLink>
    );
});
