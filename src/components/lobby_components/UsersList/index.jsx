import React from "react";
import UserCard from "./Card";
import ThemeUserList from "./styles";

const UsersList = () => {
  return (
    <ThemeUserList>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </ThemeUserList>
  )
}

export default UsersList;
