import React, {useEffect, useState} from 'react';
import cl from "./MyInput.module.css"
import classnames from "classnames";


const MyInput = ({name, type, placeholder, autocomplete}) => {
    const [value, setValue] = useState("")
    const [active, setActive] = useState(false)

    const changeActive = e => {
        let input = e.target

        setValue(input.value)
    }

    useEffect(() => {
        value.length !== 0 ? setActive(true) : setActive(false)
    }, [value])

    return (
        <input name={name}
               className={active ? classnames(cl.active, cl.input) : cl.input}
               type={type}
               value={value} onChange={e => changeActive(e)}
               placeholder={placeholder}
               autoComplete={autocomplete} />
    );
};

export default MyInput;