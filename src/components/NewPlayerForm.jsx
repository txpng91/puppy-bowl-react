import React, { useState } from 'react';
import { createPlayer } from '../API';

function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [teamId, setTeamId] = useState('');

  const beginCreatePlayer = async (event) => {
    try {
      event.preventDefault();
      const playerObj = {
        name: name,
        breed: breed,
        status: status,
        imageUrl: imageUrl,
        teamId: teamId,
      };
      await createPlayer(playerObj);
      alert(
        `A new player has been created! Everyone welcome ${playerObj.name}!`
      );
    } catch (error) {
      console.error('We have trouble with creating a new player!', error);
    }
  };

  return (
    <div className='form-container'>
      <h3>Create a player:</h3>
      <form className='form' onSubmit={beginCreatePlayer}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor='breed'>Breed: </label>
        <input
          type='text'
          value={breed}
          required
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
        <label htmlFor='status'>Status ("field" or "bench"):</label>
        <input
          type='enum'
          value={status}
          required
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <label htmlFor='imageUrl'>Image Url:</label>
        <input
          type='text'
          value={imageUrl}
          required
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
        <label htmlFor='teamId'>Team ID:</label>
        <input
          type='number'
          value={teamId}
          required
          onChange={(e) => {
            setTeamId(e.target.value);
          }}
        />
        <button type='submit'>Create Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
