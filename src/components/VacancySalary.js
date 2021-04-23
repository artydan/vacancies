import React from "react";

function VacancySalary({ salary }) {
    const salaryCurrency = () => {
        return salary.currency === "RUR" ? "RUB" : salary.currency;
    };
    const localeSalary = (sum) => {
        return sum.toLocaleString("ru");
    };

    const formatedSalary = () => {
        let result;
        if (salary.from) {
            result = localeSalary(salary.from);
        }
        if (salary.to) {
            if (result) {
                result += ` -  ${localeSalary(salary.to)}`;
            } else {
                result = localeSalary(salary.to);
            }
        }
        if (result) {
            result += ` ${salaryCurrency()}`;
        }
        return result;
    };

    return (
        <div>{salary && <div className="salary">{formatedSalary()}</div>}</div>
    );
}

export default VacancySalary;
