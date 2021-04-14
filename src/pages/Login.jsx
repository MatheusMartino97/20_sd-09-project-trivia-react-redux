import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getTokenThunk from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.returnForm = this.returnForm.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  returnForm(name, email, getToken) {
    return (
      <form action="" className="login-form">
        <label htmlFor="input-player-name">
          Nome:
          <input
            onChange={ this.handleChange }
            data-testid="input-player-name"
            type="text"
            name="name"
            value={ name }
            id="input-player-name"
          />
        </label>
        <label htmlFor="input-gravatar-email">
          Email:
          <input
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
            type="email"
            name="email"
            value={ email }
            id="input-gravatar-email"
          />
        </label>
        <Link to="/game">
          <button
            onClick={ () => {
              const stateKey = {
                player: {
                  name,
                  assertions: 0,
                  score: 0,
                  gravatarEmail: email,
                },
              };
              localStorage.setItem('state', JSON.stringify(stateKey));
              getToken({ name, email });
            } }
            data-testid="btn-play"
            type="button"
            disabled={ !name || !email }
            id="play-button"
          >
            Jogar
          </button>
        </Link>
      </form>
    );
  }

  render() {
    const { name, email } = this.state;
    const { getToken } = this.props;

    return (
      <div id="login-page">
        <div className="title">
          <h1>Trivia</h1>
          <Link to="/settings">
            <img
              src="https://i.ibb.co/kQHXQZt/Pngtree-settings-icon-mechanical-gear-cartoon-4000937.png"
              alt=""
            />
          </Link>
        </div>
        {this.returnForm(name, email, getToken)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: (userInfo) => dispatch(getTokenThunk(userInfo)),
});

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
