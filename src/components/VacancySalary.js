import React from "react";

function VacancySalary({ vacancy }) {
    const salaryCurrency = () => {
        return vacancy.salary.currency === "RUR"
            ? "RUB"
            : vacancy.salary.currency;
    };

    const salary = () => {
        if (vacancy?.salary?.from != null && vacancy?.salary?.to != null) {
            return (
                vacancy.salary.from.toLocaleString("ru") +
                " - " +
                vacancy.salary.to.toLocaleString("ru")
            );
        } else if (
            vacancy?.salary?.from != null &&
            vacancy?.salary?.to == null
        ) {
            return vacancy.salary.from.toLocaleString("ru");
        } else if (
            vacancy?.salary?.from == null ||
            vacancy?.salary?.to != null
        ) {
            return vacancy.salary.to.toLocaleString("ru");
        }
    };

    return (
        <div>
            {vacancy?.salary && (
                <div className="salary">
                    {salary()} {salaryCurrency()}
                </div>
            )}
        </div>
    );
}

export default VacancySalary;
