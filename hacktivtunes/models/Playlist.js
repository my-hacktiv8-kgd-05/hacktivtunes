const fs = require('fs')
const Mythic = require('./PlaylistMythic')
const Epic = require('./PlaylistEpic')
const Legend = require('./PlaylistLegend')
const Song = require('./Song')
const SongConverter = require('./SongConverter')
const PlaylistConverter = require('./PlaylistConverter')

class Playlist {
    static getAllPlaylist() {
        let allPlaylist = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf-8' }))
        let resultInstancePlaylist = []

        allPlaylist.forEach( playlist => {
            if (playlist.type == 'Mythic') {
                let songInstance = []
                playlist.songs.forEach( song => {
                    let songObj = new Song(song.name, song.group, song.duration)
                    songInstance.push(songObj)
                })
                let mythicPlaylist = new Mythic(playlist.id, playlist.name, songInstance)
                resultInstancePlaylist.push(mythicPlaylist)
            } else if (playlist.type == 'Epic') {
                let songInstance = []
                playlist.songs.forEach( song => {
                    let songObj = new Song(song.name, song.group, song.duration)
                    songInstance.push(songObj)
                })
                let epicPlaylist = new Epic(playlist.id, playlist.name, songInstance)
                resultInstancePlaylist.push(epicPlaylist)
            } else if (playlist.type == 'Legend') {
                let songInstance = []
                playlist.songs.forEach( song => {
                    let songObj = new Song(song.name, song.group, song.duration)
                    songInstance.push(songObj)
                })
                let legendPlaylist = new Legend(playlist.id, playlist.name, songInstance)
                resultInstancePlaylist.push(legendPlaylist)
            }
        })
        return resultInstancePlaylist
    }

    static deletePlaylist(id) { // Done
        let allPlaylist = this.getAllPlaylist()
        let result = []
        allPlaylist.forEach( playlist => {
            if (playlist.id != Number(id)) {
                result.push(playlist)
            }
        })
        // convert result to data.json
        let converted = []
        result.forEach( data => { // For not changing the format of data.json
            let convertedData = new PlaylistConverter(data.id, data.name, data.type, data.songs)
            converted.push(convertedData)
        })
        // Write to data.json
        let finalResult = JSON.stringify(converted, null, 2)
        fs.writeFileSync('./data.json', finalResult)
        return id
    }

    static addSong(data) { // Done
        let allPlaylist = this.getAllPlaylist()
        let success = false
        let found = false
        let playlistType
        allPlaylist.forEach( playlist => {
            if (playlist.id == Number(data[0])) {
                found = true
                playlistType = playlist.type
                if (playlist.songs.length < playlist.limit) {
                    let newSong = new Song(data[1], data[2], Number(data[3]))
                    playlist.songs.push(newSong)
                    success = true
                }
            }
        })
        // convert result to data.json
        let converted = []
        allPlaylist.forEach( data => {
            let convertedData = new PlaylistConverter(data.id, data.name, data.type, data.songs)
            converted.push(convertedData)
        })
        // Write to data.json
        let finalResult = JSON.stringify(converted, null, 2)
        fs.writeFileSync('./data.json', finalResult)

        if (success && found) {
            return { status: success, found: found ,id: data[0]}
        } else if (found) {
            return { status: success, found: found, name: playlistType}
        } else {
            return { status: success, found: found}
        }
    }

    static detail(id) { // Done
        let allPlaylist = this.getAllPlaylist()
        let detail = []
        allPlaylist.forEach( playlist => {
            if (playlist.id == id) {
                playlist.songs.forEach( song => {
                    detail.push(song)
                })
            }
        })
        detail.forEach( data => { // Convert Second to Minute
            // data.duration = SongConverter.convert(data.duration) // Cara Pertama (using static, code deleted)
            data.duration = new SongConverter(data.duration).minutes // Cara kedua
        })
        return detail
    }
}

module.exports = Playlist