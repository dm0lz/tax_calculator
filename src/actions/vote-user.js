const voteUser = (user) => {
  //console.log("vote user" + JSON.stringify(user));
  return {
    type: "USER_VOTED",
    payload: user
  }
}

export default voteUser;
