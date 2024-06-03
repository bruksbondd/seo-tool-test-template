import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useMemo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import Burger from '@/shared/assets/icons/burger.svg';

import { Text } from '@/shared/ui/redesigned/Text';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';

import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { useSidebarItems } from '@/widgets/Sidebar/model/selectors/getSidebarItems';
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSidebarItems();

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <header className={classNames(cls.NavWraper, {}, [className])}>
            <div className={cls.Navbar}>
                <AppLogo />

                <HStack
                    role="navigation"
                    justify="center"
                    gap="8"
                    className={`${cls.navigation} ${cls.displayHideMob}`}
                >
                    {itemsList}
                </HStack>

                <HStack gap="16" className={cls.actions}>
                    <ThemeSwitcher />
                    <Text
                        className={cls.displayHideMob}
                        variant="accent"
                        size="l"
                        text={'Anatolii'}
                    />
                    <Dropdown
                        direction="bottom left"
                        className={classNames(`${cls.displayVisibleMob}`, {}, [
                            className,
                        ])}
                        items={sidebarItemsList}
                        trigger={
                            <Burger width={40} height={40} color="#494949" />
                        }
                    />
                    <AvatarDropdown />
                </HStack>
            </div>
        </header>
    );
});
