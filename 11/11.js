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

Promise.allSettled([
    queryAPI('films').then(films => `${films.length} films`),
    queryAPI('planets').then(planets => `${planets.length} planets`),
    queryAPI('species').then(species => `${species.length} species`),
    queryAPI('vehicles').then(vehicles => `${vehicles.length} vehicles`),
])
    .then((results) => {
        const statistics = results
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value)

        output.innerText = statistics.length === 0 ? 'Empty list' : statistics.join('\n')
    })
    .catch(error => {
        console.warn(error)
        output.innerText = ':('
    }) 
    .finally(() => {
        spinner.remove()
    })
