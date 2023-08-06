import React from 'react';
import cl from "./Team.module.css"
import {teamInfo} from "../../utility/hardcode/team";
import EmployeeCard from "../../components/Cards/employeeCard/EmployeeCard";


const Team = () => {
    return (
        <div className={cl.wrapper}>
            {
                teamInfo.map(employee => <EmployeeCard fullName={employee.fullName}
                                                       src={employee.img}
                                                       role={employee.role}
                                                       key={employee.fullName} />)
            }
        </div>
    );
};

export default Team;