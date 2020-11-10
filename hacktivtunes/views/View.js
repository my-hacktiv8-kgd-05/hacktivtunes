class View {
    static allPlaylist(allPlaylistData) {
        console.log(allPlaylistData);
    }

    static successDeletePlaylist(id) {
        console.log(`\n=======\nSUCCESS\n=======\nSuccessfully deleted a playlist with id ${id}`);
    }

    static successAddSong(data) {
        if (data.status && data.found) {
            console.log(`\n=======\nSUCCESS\n=======\nSuccessfully adding new song to playlist with id ${data.id}`);
        } else if (data.found) {
            console.log(`\n=======\nERROR\n=======\nYou have reach the limit of songs for playlist with type ${data.name}`);
        } else {
            console.log(`Invalid playlist ID`);
        }
    }

    static detailPlaylist(playlist) {
        console.table(playlist)
    }
}

module.exports = View