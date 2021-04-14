import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  componentDidMount() {
    const { name, picture } = this.props;
    const { score } = JSON.parse(localStorage.getItem('state')).player;

    if (!localStorage.getItem('ranking')) localStorage.setItem('ranking', '[]');

    const ranking = [
      ...JSON.parse(localStorage.getItem('ranking')),
      { name, score, picture },
    ];

    localStorage.setItem('ranking', JSON.stringify(ranking));
  }

  render() {
    const { email } = this.props;
    const cryptoEmail = md5(email).toString();
    const { player } = JSON.parse(localStorage.getItem('state'));
    const minimumAssertions = 3;

    return (
      <>
        <header>
          <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${cryptoEmail}` } alt="profile" />
          <h1 data-testid="header-player-name">{ player.name }</h1>
          <p data-testid="header-score">{ player.score }</p>
        </header>
        <main>
          <section>
            <p data-testid="feedback-text">
              {
                player.assertions >= minimumAssertions
                  ? 'Mandou bem!'
                  : 'Podia ser melhor...'
              }
            </p>
          </section>
          <section>
            <p>
              Pontuação:&nbsp;
              <span data-testid="feedback-total-score">
                { player.score }
              </span>
            </p>
            <p>
              Acertos:&nbsp;
              <span data-testid="feedback-total-question">
                { player.assertions }
              </span>
            </p>
          </section>
          <section>
            <Link to="/">
              <button data-testid="btn-play-again" type="button">Jogar novamente</button>
            </Link>
            <Link to="/ranking">
              <button data-testid="btn-ranking" type="button">Ver ranking</button>
            </Link>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  name: state.loginReducer.name,
  picture: state.loginReducer.picture,
});

Feedback.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Feedback);