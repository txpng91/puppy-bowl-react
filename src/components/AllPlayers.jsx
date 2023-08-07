import React, { useEffect, useState } from 'react';
import { getAllPlayers } from '../API/index.js';
import PlayerItem from './PlayerItem.jsx';
import NewPlayerForm from './NewPlayerForm.jsx';
import '../style.css';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await getAllPlayers();
      setPlayers(res);
    };
    fetchPlayers();
  }, []);
  return (
    <div id='container'>
      <NewPlayerForm />
      <div id='player-container'>
        {players.map((player) => {
          return <PlayerItem key={player.id} player={player} />;
        })}
      </div>
    </div>
  );
}

export default AllPlayers;
