import React, {useEffect, useState} from 'react';
import cl from "./textArea.module.css"


const MyTextArea = ({name, placeholder}) => {
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
        <textarea placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={e => changeActive(e)}
                  className={active ? cl.active : null}/>
    );
};

export default MyTextArea;