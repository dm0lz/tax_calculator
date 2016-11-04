import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import voteUser from '../actions/vote-user.js';

class UserDetail extends React.Component {
  render(){
    if (!this.props.user){
      return(
        <div>Select a User...</div>
      );
    }
    return(
      <div>
        <button type="button" onClick={() => this.props.voteUser(this.props.user)}> Vote </button>
        <div>{JSON.stringify(this.props.user)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.activeUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({voteUser: voteUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
