
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteBlog,
    getRouteTool,
    getRouteSeoCourse,
    getRouteContact
} from '@/shared/const/router';
import { useTranslation } from 'react-i18next';


export const useSidebarItems = () => {
  
    const { t } = useTranslation();
    const sidebarItemsList: SidebarItemType[] = [
        
        {
            path: getRouteAbout(),
            content: t('About'),
        },
        {
            path: getRouteSeoCourse(),
           
            content: t('SEO Course'),
        },
        {
            path: getRouteTool(),
          
            content: t('Tools'),
            
        },
        {
            path: getRouteBlog(),
          
            content: t('Blog'),
            
        },
        {
            path: getRouteContact(),
          
            content: t('Contact'),
            
        },
    ];



    return sidebarItemsList;
};
