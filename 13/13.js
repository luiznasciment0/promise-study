// #region Setup
const API_URL = 'https://starwars.egghead.training/'

const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const queryAPI = async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`)
    
    if (response.ok) {
        return response.json()
    }

    throw Promise.reject(Error('Unsuccessful response'))
}
    
// #endregion

async function main() {
    try {
        const [films, planets, species] = await Promise.all([
            queryAPI('films'),
            queryAPI('planets'),
            queryAPI('species'),
        ])

        output.innerText = `${films.length} films, ${planets.length} planets and ${species.length} species`
    } catch (error) {
        console.log(error)
        output.innerText = ':('
    } finally {
        spinner.remove()
    }
}

main()