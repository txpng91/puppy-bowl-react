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
    <div className='details-container'>
      <div className='player-details'>
        <img src={player?.imageUrl} alt={player?.name} />
        <h4>{player?.name}</h4>
        <p className='team-id'>
          {player?.team?.id === null ? 'Not in a team yet' : player?.team?.id}
        </p>
        <p>
          <strong>Breed:</strong> {player?.breed}
        </p>
        <p>
          <strong>Status:</strong> {player?.status}
        </p>
        <p>
          <strong>Team:</strong>
          {!player?.team ? 'No team' : player?.team?.name}
        </p>
        <p>
          <strong>Teammates:</strong>
          {!teammates ? 'not in a team yet' : teammates}
        </p>
      </div>
    </div>
  );
}

export default SinglePlayer;
