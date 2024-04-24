// import the Media class:
const Media = require('./Media');

// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }

  static shortestAlbum(albumArr) {
    let minLength = 0;
    let shortestAlbum = null;

    albumArr.forEach((album) => {
      if (album.duration > minLength) {
        minLength = album.duration;
        shortestAlbum = album;
      }
    });

    return shortestAlbum;
  }
}

// don't change below
module.exports = Music;
