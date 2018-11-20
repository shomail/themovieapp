import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility
        && <p>Welcome to themovieapp where you can discover latest movies</p>
    }
    <button type="button" onClick={toggleMessage}>Toggle Me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
