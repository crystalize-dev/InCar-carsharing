import React from 'react';
import cl from "./LangSwitcher.module.css"
import {useTranslationChange} from "i18nano";
import classnames from "classnames";


const LangSwitcher = ({className}) => {
    const lang = useTranslationChange()

    const switchLang = () => {
        lang.lang === 'ru' ? lang.change('en') : lang.change('ru')
    }

    return (
        <p className={classnames(cl.lang, className)} onClick={switchLang}>
            {lang.lang}
        </p>
    );
};

export default LangSwitcher;