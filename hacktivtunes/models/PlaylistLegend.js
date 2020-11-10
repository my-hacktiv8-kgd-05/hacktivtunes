const PlaylistFactory = require('./PlaylistFactory')

class Legend extends PlaylistFactory {
    constructor(id, name, songs) {
        super(id, name, 'Legend', 5, songs)
    }
}

module.exports = Legend