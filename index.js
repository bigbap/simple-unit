const glob = require('glob')
const { runTests } = require('./src')

glob(`${__dirname}/**/*.test.js`, {
    ignore: `${__dirname}/**/node_modules/**/*.test.js`
}, (err, files) => {
    for (const file of files) {
        require(`${file}`)
    }

    runTests()
})
