
import { createContext, useState ,useContext} from 'react';

type PaletteMode = 'light' | 'dark';

type SettingStateType = {
    theme: PaletteMode, 
    setTheme: (theme: PaletteMode ) => void;
}



 const SettingsContext = createContext<SettingStateType>({} as SettingStateType)



export function ContextWrapper({ children }: any) {

 const [theme, setTheme] =useState<PaletteMode>('dark');
 
 const ThemeContextValue = { theme, setTheme };


    return <>
      
            <SettingsContext.Provider value={ThemeContextValue}>
        
                    {children}
            
            </SettingsContext.Provider>
      
    </>
}

export function useThemeSet() {
    const result = useContext(SettingsContext);
    return result
};