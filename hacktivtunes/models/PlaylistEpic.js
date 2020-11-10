const PlaylistFactory = require('./PlaylistFactory')

class Epic extends PlaylistFactory {
    constructor(id, name, songs) {
        super(id, name, 'Epic', 2, songs)
    }
}

module.exports = Epic