import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getMovies } from '../movies/actions';
import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility && <p>Welcome to themovieapp where you can discover latest movies</p>}
    <button type="button" onClick={toggleMessage}>
      Toggle Message
    </button>
    <button type="button" onClick={getMovies}>
      Refresh Movies
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      toggleMessage,
      getMovies,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toggle);

Toggle.propTypes = {
  messageVisibility: PropTypes.bool.isRequired,
  toggleMessage: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
};
