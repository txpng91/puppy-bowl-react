import React, { useEffect, useState } from 'react';
import { getAllPlayers } from '../API/index.js';
import PlayerItem from './PlayerItem.jsx';
import NewPlayerForm from './NewPlayerForm.jsx';
import '../style.css';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await getAllPlayers();
      setPlayers(res);
    };
    fetchPlayers();
  }, []);

  const displayPlayers = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : players;

  return (
    <div id='container'>
      <div className='tasks'>
        <NewPlayerForm />
        <div className='search-bar'>
          <label>
            Search:{' '}
            <input
              type='text'
              placeholder='Player Name'
              value={searchParam}
              onChange={(e) => {
                setSearchParam(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
      <div id='player-container'>
        {displayPlayers.map((player) => {
          return <PlayerItem key={player.id} player={player} />;
        })}
      </div>
    </div>
  );
}

export default AllPlayers;
