import React from "react";
import UserCard from "./UserCard";

const UsersList = ({ users, deleteUser, handleClickEdit }) => {
  return (
    <section
      className=" "
    >
      <div className=" grid  gap-10 auto-rows-auto 
         grid-cols-[repeat(auto-fill,_310px)] justify-center ">{users.map((user) => (
        <UserCard key={user.id} user={user} deleteUser={deleteUser}
        handleClickEdit={handleClickEdit} />
      ))} </div>
      
     
    </section>
  );
};

export default UsersList;
