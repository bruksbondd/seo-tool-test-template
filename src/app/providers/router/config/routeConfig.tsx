import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';



import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRoutes,
    getRouteAbout,
    getRouteForbidden,
    getRouteBlog,
    getRouteTool,
    getRouteSeoCourse,
    getRouteContact,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SeoCoursePage } from '@/pages/SeoCourselPage';
import SeoToolsPage from '@/pages/SeoToolsPage/ui/SeoToolsPage/SeoToolsPage';
import { ContactPage } from '@/pages/Contact';
import BlogPage from '@/pages/BlogPage/ui/BlogPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.TOOL]: {
        path: getRouteTool(),
        element: <SeoToolsPage />,
    },
    [AppRoutes.SEO_COURSE]: {
        path: getRouteSeoCourse(),
        element: <SeoCoursePage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    
    [AppRoutes.BLOG]: {
        path: getRouteBlog(),
        element: <BlogPage />,
      
    },

    [AppRoutes.CONTACT]: {
        path: getRouteContact(),
        element: <ContactPage />,
       
    },
   
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
