const PlaylistController = require('./controllers/Playlist-Controller')
const command = process.argv[2]
const args = process.argv.slice(3)

switch(command) {
    case 'show': // Show all Playlist
        PlaylistController.show()
        break;
    case 'delete': // Delete playlist with id
        PlaylistController.delete(args)
        break;
    case 'addToPlaylist': // Add to playlist with id
        PlaylistController.addToPlaylist(args)
        break;
    case 'detail': // Detail in playlist with id
        PlaylistController.detail(args)
        break;
}

/**
 * * RELEASE 0
 *      > Buat class Playlist (Property) // Done (Kebalik)
 *      > Buat class Song && Inheritance (Mythic, Legend, Epic) // Done
 * * RELEASE 1
 *      > Format data.json tidak boleh berubah // Done
 *      > $ node index.js show // Output as Expected
 *      > $ node index.js delete <id> // Output as Expected
 * * RELEASE 2
 *      > node index.js addToPlaylist // Output as Expected
 *      > set limit playlist // Output as Expected
 *      > invalid playlist id // Output as Expected
 * * RELEASE 3
 *      > Convert seconds to minutes // Done Using Instance + Getter
 *      > $ node index.js detail <id> // Output as Expected
 */