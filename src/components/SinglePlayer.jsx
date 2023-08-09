import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlayerById } from '../API';

function SinglePlayer() {
  const params = useParams();
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await getPlayerById(params.id);
      setPlayer(res);
    };
    fetchPlayer();
  }, []);

  let teammates;
  if (player?.team) {
    teammates = player?.team?.players?.map((player) => player.name);
  }
  return (
    <div id='player-container'>
      <div className='details'>
        <img
          className='details-image'
          src={player?.imageUrl}
          alt={player?.name}
        />
        <div className='details-article'>
          <p>
            <strong>Name: </strong>
            {player?.name}
          </p>
          <br />
          <p className='team-id'>
            <strong>id: </strong>
            {player?.team?.id === null ? 'Not in a team yet' : player?.team?.id}
          </p>
          <br />
          <p>
            <strong>Breed:</strong> {player?.breed}
          </p>
          <br />
          <p>
            <strong>Status:</strong> {player?.status}
          </p>
          <br />
          <p>
            <strong>Team:</strong>
            {!player?.team ? 'No team' : player?.team?.name}
          </p>
          <br />
          <p>
            <strong>Teammates:</strong>
            {!teammates ? 'not in a team yet' : teammates}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePlayer;
