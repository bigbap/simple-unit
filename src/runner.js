const { queue } = require('../lib')

const runNextTest = async () => {
    if (queue.length === 0) return

    const [next] = queue.splice(0, 1)

    console.log('--------------------')
    console.log(`- I ${next.what}`)
    console.log('')

    await next.test()
        .then(() => console.log(`- pass`))
        .catch(fail => console.log(`- fail\n${fail}`))
    console.log('')
}

const runTests = async () => {
    console.log('')
    console.log('STARTING TEST RUN')
    console.log('')
    while (queue.length > 0) {
        await runNextTest()
    }
}

module.exports = { runTests }