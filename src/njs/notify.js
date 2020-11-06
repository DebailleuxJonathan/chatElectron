const path = require('path')
const notifier = require('node-notifier')

function testNotify(message,sound) {
    notifier.notify({
        title:'SuperChat',
        message: message,
        sound:sound,
    })
}
window.notifyNow = testNotify
