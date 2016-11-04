import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import selectUser from '../actions/index.js';

class UserList extends React.Component {
  userItems() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.first} : vote_nb : {user.vote_nb}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.userItems()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
