class PlaylistFactory {
    constructor(id, name, type, limit, songs) {
        this.id = id
        this.name = name
        this.type = type
        this.limit = limit
        this.songs = songs
    }
}

module.exports = PlaylistFactory