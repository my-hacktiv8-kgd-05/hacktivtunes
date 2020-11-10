class SongConverter {
    constructor(seconds) {
        this._minutes = this.convert(seconds)
    }

    get minutes () {
        return this._minutes
    }

    convert (time) {
        let menit = Math.floor(time / 60)
        let detik = time % 60
        if (detik < 10) {
            detik = `0${detik}`
        }
        return `${menit}:${detik}`
    }
}

module.exports = SongConverter