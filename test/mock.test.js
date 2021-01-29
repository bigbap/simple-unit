const { I, assert } = require("../lib")

I("run a passing test", async () => {
    return assert.equal(true, true)
})

I("run a failing test", async () => {
    return assert.equal(true, false, `true does not equal false`)
})