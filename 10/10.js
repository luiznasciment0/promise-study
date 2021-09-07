// #region Setup
const API_URL = 'https://starwars.egghead.training/'

const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const queryAPI = (endpoint) => 
    fetch(`${API_URL}${endpoint}`)
    .then(response => 
        response.ok 
        ? response.json() 
        : Promise.reject(Error('Unsuccessful response')))
// #endregion

Promise.all([
    queryAPI('films'),
    queryAPI('planets'),
    queryAPI('species')
])
    .then(([films, planets, species]) => {
        output.innerText = `${films.length} films, ${planets.length} planets and ${species.length} species`
    })
    .catch(error => {
        console.warn(error)
        output.innerText = ':('
    }) 
    .finally(() => {
        spinner.remove()
    })
