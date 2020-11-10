const PlaylistFactory = require('./PlaylistFactory')

class Mythic extends PlaylistFactory {
    constructor(id, name, songs) {
        super(id, name, 'Mythic', 10, songs)
    }
}

module.exports = Mythic