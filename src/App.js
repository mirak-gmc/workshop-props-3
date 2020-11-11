import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

const listOfUsers = [
  {
    name: "John Doe",
    email: "John@gmail.com",
    age: 40,
    isAuth: false,
    address : "London"
  },
  {
    name: "Hasan ben Hamdouda ",
    email: "Hasan@gmail.com",
    age: 27,
    isAuth: true,
  },
  {
    name: "Youssef Fathalla",
    email: "Youssed@gmail.com",
    age: 25,
    isAuth: true,
  },
  {
    name: "Firas Bechedli",
    email: "Firas@gmail.com",
    age: 15,
    isAuth: false,
  },
  {
    name: "Sabrine",
    email: "sabrine@gail.com",
    age: 27,
    isAuth: true,
  },
];

function App() {
  const sayHello = (name) => alert(name);

  return (
    <div>
      {listOfUsers.map((el) => (
        <UserCard userInfo={el} myFunction={sayHello} />
      ))}
    </div>
  );
}

export default App;
