// Convert for not changing the data.json format
class PlaylistConverter {
    constructor(id, name, type, songs) {
        this.id = id
        this.name = name
        this.type = type
        this.songs = songs
    }
}

module.exports = PlaylistConverter