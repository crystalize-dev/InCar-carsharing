import './App.css';
import AppRouter from "./routing/AppRouter";
import {TranslationProvider} from "i18nano";
import {translations} from "./localization/translations";


function App() {
    return (
        <TranslationProvider translations={translations}
                             fallback={'ru'}
                             preloadLanguage={true}
                             preloadFallback={true}
                             transition={true}>
                <AppRouter/>
        </TranslationProvider>
    );
}

export default App;
