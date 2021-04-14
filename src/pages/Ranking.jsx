import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    const orderedRanking = JSON.parse(localStorage.getItem('ranking'))
      .sort((playerA, playerB) => playerB.score - playerA.score)
      // Caso seja necessário tirar as replicações de jogadores com o mesmo nome
      // .reduce((acc, currentPlayer) => {
      //   if (!acc.find((player) => player.name === currentPlayer.name)) {
      //     return [...acc, currentPlayer];
      //   }

      //   return acc;
      // }, [])
      .map((player, index) => (
        <li key={ index } className="player">
          <p>{`${index + 1}°`}</p>
          <img src={ player.picture } alt="Gravatar" />
          <ul>
            <li data-testid={ `player-name-${index}` }>
              <strong>Jogador: </strong>
              {player.name}
            </li>
            <li data-testid={ `player-score-${index}` }>
              <strong>Pontuação: </strong>
              {player.score}
            </li>
          </ul>
        </li>
      ));

    return (
      <div id="ranking-page">
        <div className="title">
          <h1 data-testid="ranking-title">Ranking</h1>
          <Link to="/">
            <button type="button" data-testid="btn-go-home">Home</button>
          </Link>
        </div>
        <ol>
          { orderedRanking }
        </ol>
      </div>
    );
  }
}

export default Ranking;
