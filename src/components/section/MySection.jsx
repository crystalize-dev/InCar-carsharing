import React from 'react';
import classnames from "classnames";
import cl from "./MySection.module.css"


const MySection = ({id, className, children}) => {
    return (
        <section id={id} className={classnames(cl.section, className)}>
            {children}
        </section>
    );
};

export default MySection;