import React from "react";

function Profile(props){
  return (
    <div>
      <h1>Name: {props.person}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Rank: {props.rank}</h1>
    </div>
  );
}

export default Profile;