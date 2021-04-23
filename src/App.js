import VacancyView from "./components/VacancyView";
import SearchInput from "./components/SearchInput";
import React, { useState, useEffect } from "react";
import { getVacancies } from "./services/hhService";
import PaginationView from "./components/PaginationView";
function App() {
    const [vacancies, setVacancies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchedVacancies, setSearchedVacancies] = useState([]);
    const [vacanciesOnPage, setVacanciesOnPage] = useState([]);

    useEffect(() => {
        getVacancies(100).then((vacancies) => setVacancies(vacancies));
    }, []);

    useEffect(() => {
        setSearchedVacancies(
            vacancies?.filter((val) =>
                val.name.toLowerCase().startsWith(searchValue.toLowerCase())
            )
        );
    }, [searchValue, vacancies]);

    return (
        <div className="App">
            <SearchInput
                onSearchValueChanged={setSearchValue}
                data={vacancies}
            />
            <VacancyView vacancies={vacanciesOnPage} data={vacancies} />
            <PaginationView
                itemsOnPageChanged={setVacanciesOnPage}
                items={searchedVacancies}
            />
        </div>
    );
}

export default App;
