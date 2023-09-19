import './App.css';
import AppRouter from "./routing/AppRouter";
import {useState} from "react";
import {LangContext} from "./context/LangContext"
import {TranslationProvider} from "i18nano";
import {translations} from "./localization/translations";


function App() {
    const [lang, setLang] = useState('en')

    const switchLang = () => {
        lang === 'ru' ? setLang('en') : setLang('ru')
    }

    return (
        <TranslationProvider translations={translations}
                             language={'en'} fallback={'en'}
                             preloadLanguage={true}
                             preloadFallback={true}
                             transition={true}>
            <LangContext.Provider value={{lang, switchLang}}>
                <AppRouter/>
            </LangContext.Provider>
        </TranslationProvider>
    );
}

export default App;
