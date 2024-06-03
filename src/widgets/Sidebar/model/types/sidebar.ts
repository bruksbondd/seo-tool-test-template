import React from 'react';

export interface SidebarItemType {
    path: string;
    content: string;
    
    authOnly?: boolean;
}
