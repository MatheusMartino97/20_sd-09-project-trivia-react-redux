import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTimerAction } from '../actions/index';

class Timer extends Component {
  render() {
    const { timer } = this.props;

    return (
      <div className="timer">{ timer > 0 ? timer : 'Acabou o tempo!' }</div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.timerReducer.timer,
});

const mapDispatchToProps = (dispatch) => ({
  updateTimer: () => dispatch(updateTimerAction()),
});

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
