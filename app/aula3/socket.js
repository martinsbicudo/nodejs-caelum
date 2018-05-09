module.exports = http => {
    const io = require('socket.io')(http)

    //SOCKET ACTIONS
    io.on('connection', socket => {
        console.log('Socket Connected :)')

        socket.on('disconnect', () => console.log('Socket Disconnected :('))
    })
}