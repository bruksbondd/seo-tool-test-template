import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import SanIcon from '@/shared/assets/icons/san.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/deprecated/Icon';

import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {});
    }, [dispatch, toggleTheme]);
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.wraperSwicher, {}, [className])}
            onClick={onToggleHandler}
        >
            <Icon
                className={`${cls.iconSwicher} ${
                    Theme.DARK === theme && cls.disableColor
                }`}
                Svg={SanIcon}
                width={18}
                height={18}
            />
            <Icon
                className={`${cls.iconSwicher} ${
                    Theme.LIGHT === theme && cls.disableColor
                }`}
                Svg={MoonIcon}
                width={16}
                height={16}
            />
        </Button>
    );
});
