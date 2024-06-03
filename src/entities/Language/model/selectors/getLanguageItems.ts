
import { LanguageItemType } from '../types/language';
import { Language } from '../../model/types/language';
import Ukrainian from '@/shared/assets/icons/Ukrainian.svg';
import English from '@/shared/assets/icons/English.svg';
import Swedish from '@/shared/assets/icons/Swedish.svg';
import Spanish from '@/shared/assets/icons/Spanish.svg';
import French from '@/shared/assets/icons/French.svg';
import German from '@/shared/assets/icons/German.svg';
import Portuguese from '@/shared/assets/icons/Portuguese.svg';
import Dutch from '@/shared/assets/icons/Dutch.svg';
import Italian from '@/shared/assets/icons/Italian.svg';


export const useLangItems = () => {
    
    const sidebarItemsList: LanguageItemType[] = [
        { value: 'en', name: Language.English, icon: English  },
        { value: 'uk', name: Language.Ukraine, icon: Ukrainian  },
        { value: 'fr', name: Language.French, icon: French },
        { value: 'sw', name: Language.Swedish, icon: Swedish },
        { value: 'sp', name: Language.Spanish, icon: Spanish  },
        { value: 'ge', name: Language.German, icon: German  },
        { value: 'po', name: Language.Portuguese, icon: Portuguese  },
        { value: 'do', name: Language.Dutch, icon: Dutch  },
        { value: 'it', name: Language.Italian, icon: Italian  },
    ];

    return sidebarItemsList;
};
