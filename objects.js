var playlist = {
  theBeatles: "Yesterday",
  billieEilish: "Bad Guy",
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

var playlist = {
  theBeatles: "Yesterday",
  billieEilish: "Bad Guy",
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist;
}
