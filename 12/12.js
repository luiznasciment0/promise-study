// #region Setup
const API_URL_1 = 'https://starwars.egghead.training/'
const API_URL_2 = 'https://swapi.mariusschulz.com/'

const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const query = (rootURL, endpoint) => 
    fetch(`${rootURL}${endpoint}`)
        .then(response => 
            response.ok 
            ? response.json() 
            : Promise.reject(Error('Unsuccessful response')))

const queryAPI = (endpoint) => 
    Promise.any([
        query(API_URL_1, endpoint),
        query(API_URL_2, endpoint),
    ]).catch(() => {
        return Promise.reject(
            Error(`Failed to fetch endpoint ${endpoint}`)
        )
    })

const getFilmTitles = (films) => 
    films
        .slice()
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id}. ${film.title}`)
        .join('\n')
// #endregion

queryAPI('films').then(
    // onFulfilled
    response => {
        output.innerText = getFilmTitles(response)
    })
    // onRejected
    .catch(error => {
        console.warn(error)
        output.innerText = ':('    
    })
    .finally(() => {
        spinner.remove()
    })
