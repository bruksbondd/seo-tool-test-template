import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';


import { getRouteTool } from '@/shared/const/router';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {}, [dispatch]);

    const items = [
        {
            content: t('Tools'),
            href: getRouteTool(),
        },

        {
            content: t('LogIn'),
            onClick: onLogout,
        },
    ];

    return (
        <Dropdown
            direction="bottom left"
            className={classNames('', {}, [className])}
            items={items}
            trigger={
                <Avatar
                    size={62}
                    src={
                        'https://mintsplash.net/wp-content/uploads/2024/06/user-avatar.png'
                    }
                />
            }
        />
    );
});
