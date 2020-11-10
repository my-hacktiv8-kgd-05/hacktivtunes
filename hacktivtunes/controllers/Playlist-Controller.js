const Playlist = require('../models/Playlist')
const View = require('../views/View')

class PlaylistController {
    static show() {
        let allPlaylist = Playlist.getAllPlaylist()
        View.allPlaylist(allPlaylist)
    }
    static delete(id) {
        let deletePlaylist = Playlist.deletePlaylist(id)
        View.successDeletePlaylist(deletePlaylist)
    }
    static addToPlaylist(data) {
        let addSongToPlaylist = Playlist.addSong(data)
        View.successAddSong(addSongToPlaylist)
    }
    static detail(id) {
        let playlist = Playlist.detail(id)
        View.detailPlaylist(playlist)
    }
}

module.exports = PlaylistController