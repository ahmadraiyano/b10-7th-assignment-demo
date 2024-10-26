import { useEffect } from "react";
import { useState } from "react";
import Player from '../Player/Player'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-2">
            {
                players.map(player => <Player key={player.id} player={player}></Player>)
            }
            <div className="h-60"></div>
        </div>
    );
};

export default Players