export async function getVacancies(count) {
    return await fetch(`https://api.hh.ru/vacancies?per_page=${count}`)
        .then((res) => res.json())
        .then((data) => data.items);
}

export async function getDetailedVacancieInfo(vacancyId) {
    return await fetch(`https://api.hh.ru/vacancies/${vacancyId}`)
        .then((res) => res.json())
        .then((result) => result);
}
