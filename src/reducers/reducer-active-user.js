import {update} from 'react-addons-update';
import React from 'react';

export default function(state=null, action){
  switch(action.type) {
    case "USER_SELECTED":
      return action.payload;
      break;
    case "USER_VOTED":
      console.log("state : " + JSON.stringify(state));
      console.log( "action payload" + JSON.stringify(action.payload));
      if (state === null){
        //var user = Object.assign({}, state, action.payload);
        return action.payload;
      }else{
        var user = Object.assign({}, state);
      }
      if (user.vote_nb === undefined){
        user.vote_nb = 0;
      }else{
        user.vote_nb = user.vote_nb + 1;
      }
      console.log("user : " + JSON.stringify(user));
      return user;
      //user.vote_nb = action.payload.vote_nb + 1;
      //var updatedUser = update(state, {vote_nb: {$set: v_nb + 1}});
      //return updatedUser;
      //console.log(user);
      //return user;
      break;
    default:
      return state;
  }
}
