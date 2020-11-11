import React from "react";

// const name = "John Doe";
// const age = 40;
// const email = "Jhon@gmail.com";

const UserCard = (props) => {
  console.log("This is my Props", props); // { name , email , age }
  const { userInfo, myFunction } = props;
  return (
    <div className="user-card">
      <span className={userInfo.isAuth ? "green-circle" : "red-circle"}></span>
      <h2>Name : {userInfo.name} </h2>
      <h2>Age : {userInfo.age} </h2>
      <h2>Email : {userInfo.email} </h2>
      {userInfo.address && <h2>Address : {userInfo.address} </h2>}
      <button onClick={() => myFunction(userInfo.name)}>click Me</button>
    </div>
  );
};

export default UserCard;
