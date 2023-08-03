import React, {useState} from 'react';

import cl from "./checkBox.module.css"


const CheckBox = ({id="checkbox", text, name}) => {
    const [value, setValue] = useState(false)

    return (
        <div className={cl.wrapper}>
            <input name={name} className={cl.customCheckBox}
                   type="checkbox"
                   checked={value} onChange={e => setValue(e.target.checked)}
                   id={id}/>

            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default CheckBox;