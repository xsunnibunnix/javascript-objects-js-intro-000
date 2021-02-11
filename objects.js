var playlist = {
  theBeatles: "Yesterday",
  billieEilish: "Bad Guy",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  console.log(delete playlist.artistName;)
  return playlist;
}
