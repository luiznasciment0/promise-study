const API_URL = 'https://starwars.egghead.training/'
const output = document.getElementById('output')

output.innerText = "Loading ..."

fetch(`${API_URL}films`)
    .then(response => response.json())
    .then(films => output.innerText = getFilmTitles(films))

const getFilmTitles = (films) => films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join('\n')
