const assertRaw = require('assert').strict
const queue = []

const I = (what, test) => {
    queue.push({
        test,
        what
    })
}

const assert = {
    deepEqual: assertRaw.deepStrictEqual,
    equal: assertRaw.strictEqual
}

module.exports = { I, assert, queue }
