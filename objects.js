var playlist = {
  theBeatles: "Yesterday",
  billieEilish: "Bad Guy",
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.Assign(playlist, {[artistName]: songTitle})
}
