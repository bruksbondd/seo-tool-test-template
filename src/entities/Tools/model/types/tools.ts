

export interface ToolsUrl {
    url?: string;
    incudeMetaTags?: string;
    includeTitles?: string;
    includeAlttitles?: string;
    excludeKeywords?: string;
    recivedUrlData?: [],
    error?: string,
    isLoading?: boolean
}

export interface ToolsText {
    text?: string;
}

export interface ToolsKeyword {
    text?: string;
}

export interface ToolsUrlSchema {
    dataToolsUrl?: ToolsUrl;
    dataToolsText?: ToolsText;
    dataToolsKeyword?: ToolsKeyword;
}