import React, {useState} from 'react';
import cl from "./MySelect.module.css"


const MySelect = ({children, defaultValue="Select option", name}) => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState(defaultValue)

    const changeActive = e => {
        let select = e.target

        setActive(true)
        setValue(select.value)
    }

    return (
        <select name={name} className={active ? cl.active : null} onChange={e => changeActive(e)} value={value}>
            <option disabled>{defaultValue}</option>
            {children}
        </select>
    );
};

export default MySelect;