function printSong() {
  console.log("Oops - The Global Object");
}
const jukebox = {
  songs: [
    {
      title: "Wanna Be Startin' Somethin'",
      artist: "Michael Jackson",
    },
    { title: "Superstar", artist: "Madonna" },
  ],
  printSong: function (song) {
    console.log(song.title + " - " + song.artist);
  },
  printSongs: function () {
    // `this` bound to the object (OK)
    this.songs.forEach(
      function (song) {
        // `this` bound to global object (bad)
        this.printSong(song);
      }.bind(this)
    );
  },
};

jukebox.printSongs();
// Output: "Oops - The Global Object"
//         "Oops - The Global Object"
//

async function add(x) {
  if (x < 0) throw new Error("The number must be positive");
  var a = new Promise(function (resolve, reject) {
    setTimeout(resolve(40), 500);
    reject;
  });
  var b = new Promise(function (resolve, reject) {
    setTimeout(resolve(90), 500);
    reject;
  });
  return x + (await a) + (await b);
}

add(10).then((result) => {
  result;
});
