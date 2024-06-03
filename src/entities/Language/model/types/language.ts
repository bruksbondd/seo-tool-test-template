export enum Language {
    English = 'English',
    Ukraine = 'Ukraine',
    French = 'French',
    Swedish = 'Swedish',
    Spanish = 'Spanish',
    German = 'German',
    Portuguese = 'Portuguese',
    Dutch = 'Dutch',
    Italian = 'Italian',
}

export interface LanguageItemType {
    value: string;
    name: string;
    
    icon?: React.VFC<React.SVGProps<SVGSVGElement>> | any;
}