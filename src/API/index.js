// Get all the players from the API
const cohortName = '2109-UNF-HY-WEB-PT';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function getAllPlayers() {
  try {
    const res = await fetch(`${API_URL}/players`);
    const result = await res.json();
    const players = result.data.players;
    return players;
  } catch (error) {
    console.error('Unable to fetch all players!', error);
  }
}

export async function getPlayerById(id) {
  try {
    const res = await fetch(`${API_URL}/players/${id}`);
    const player = await res.json();
    return player.data.player;
  } catch (error) {
    console.error('Unable to fetch the single player!', error);
  }
}

export async function createPlayer(playerObj) {
  try {
    const res = await fetch(`${API_URL}/players/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerObj),
    });
    const newPlayer = await res.json();
    return newPlayer;
  } catch (error) {
    console.error('Unable to create new player!', error);
  }
}

export async function removePlayer(id) {
  try {
    const res = await fetch(`${API_URL}/players/${id}`, {
      method: 'DELETE',
    });
    const result = await res.json();
    console.log(result);
    window.location.reload();
  } catch (error) {
    console.error('Unable to delete a player...', error);
  }
}
