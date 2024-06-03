export enum AppRoutes {
    TOOL = 'tool',
    SEO_COURSE = 'seo_course',
    ABOUT = 'about',
    CONTACT = 'contact',
    BLOG = 'blog',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteTool = () => '/';
export const getRouteSeoCourse = () => '/seo_course';
export const getRouteAbout = () => '/about';
export const getRouteContact = () => '/contact';
export const getRouteBlog = () => '/blog';

export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteTool()]: AppRoutes.TOOL,
    [getRouteSeoCourse()]: AppRoutes.SEO_COURSE,
    [getRouteAbout()]: AppRoutes.ABOUT,
    
    [getRouteBlog()]: AppRoutes.BLOG,

    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
