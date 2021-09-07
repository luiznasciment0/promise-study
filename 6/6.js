const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

const start = new Date().getTime()

sleep(1000)
    .then(() => {
        console.log('After 1s')
    })
    .then(() => sleep(1000))
    .then(() => {
        console.log('After 2s')
        const end = new Date().getTime()

        console.log(end - start)
    })