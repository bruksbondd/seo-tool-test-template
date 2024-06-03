import  { memo } from 'react';
import cls from './AppLogo.module.scss';
import Logo from '@/shared/assets/icons/logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <div className={classNames(cls.appLogoWrapper, {}, [className])}>
            <Logo
                width={144}
                height={30}
                className={cls.appLogo}
            />
        </div>
    );
});
