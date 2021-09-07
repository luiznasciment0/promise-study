const resolveAfter = (ms, value) => new Promise(resolve => {
    setTimeout(() => {
        resolve(value)
    }, ms)
})

const timeout = (ms, promise) => {
    let timeoutID;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutID = setTimeout(() => {
            reject(Error(`Operation timed out after ${ms}ms`))
        }, ms)
    })

    return Promise
            .race([promise, timeoutPromise])
            .finally(() => {
                clearTimeout(timeoutID)
            })
}

const promise = resolveAfter(1000, "A")

timeout(5000, promise).then(
    value => {
        console.log(value)
    },
    error => {
        console.error(error.message)
    }
)