export async function getVacancies(count) {
    return await fetch(`https://api.hh.ru/vacancies?per_page=${count}`)
        .then((res) => res.json())
        .then((data) => data.items);
}
