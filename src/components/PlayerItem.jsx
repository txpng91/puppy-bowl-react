import React from 'react';
import { removePlayer } from '../API';
import { Link } from 'react-router-dom';
function PlayerItem({ player }) {
  const deletePlayer = async (id) => {
    await removePlayer(id);
  };

  return (
    <div id='player-item'>
      <img
        className='player-image'
        src={`${player.imageUrl}`}
        alt={`${player.name}`}
      />
      <h3 className='player-name'>{player.name}</h3>
      <p className='player-id'>
        <strong>{player.cohortId}</strong>
      </p>
      <p className='player-breed'>Breed: {player.breed}</p>
      <p className='player-status'>Status: {player.status}</p>
      <Link to={`/players/${player.id}`}>
        <button className='info-btn'>Info</button>
      </Link>
      <button
        className='delete-btn'
        onClick={() => {
          deletePlayer(player.id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default PlayerItem;
