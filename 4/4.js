// #region Setup
const API_URL = 'https://starwars.egghead.training/'
const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const getFilmTitles = (films) => films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join('\n')
// #endregion

fetch(`${API_URL}films`).then(
    // onFulfilled
    response => {
        if (!response.ok) {
            return Promise.reject(
                new Error("Unsuccessful response")
            )
        }

        return response.json()
            .then(films => output.innerText = getFilmTitles(films))
    })
    .catch(error => {
        // onRejected
        console.warn(error)
        output.innerText = ':('    
    })
    .finally(() => {
        spinner.remove()
    })


