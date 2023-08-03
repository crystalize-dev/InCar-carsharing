import React from 'react';
import "./icon.css"


const Icon = ({className, children, ...props}) => {
    return (
        <span {...props} className={"material-symbols-rounded " + className}>
            {children}
        </span>
    );
};

export default Icon;