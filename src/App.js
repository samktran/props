import React from "react";
import "./style.css";
import Profile from './components/Profile';

const user = {name:"Luca", age:69, rank:"Radiant"};

export default function App() {
  return (
    <div>
    <Profile person = {user.name} age = {user.age} rank = {user.rank}></Profile>
    </div>
  );
}
