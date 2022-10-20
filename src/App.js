import React, { useState, } from "react";
import LoginForm from "./components/LoginForm";
import {BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import Congr from "./congr";

function App() {

const adminUser1 = {
  username: "user1",
  password: "1234"
}

const adminUser2 = {
  username: "user2",
  password: "1234"
}

const adminUser3 = {
  username: "user3",
  password: "1234"
}

const adminUser4 = {
  username: "user4",
  password: "1234"
}

const adminUser5 = {
  username: "acc",
  password: "1234"
}



const [user,setUser] = useState({username:"",password:""});
const [error, seterror] = useState("");

const Login = details => {
console.log(details);

if (details.username == adminUser1.username && details.password == adminUser1.password) {
  console.log("logged in");
  setUser({
   username: details.username,
   password: details.password
  })  
} else if  (details.username == adminUser2.username && details.password == adminUser2.password) {
  console.log("logged in");
  setUser({
    username: details.username,
    password: details.password
   })  
} else if  (details.username == adminUser3.username && details.password == adminUser3.password) {
  console.log("logged in");
  setUser({
    username: details.username,
    password: details.password
   })  
} else if  (details.username == adminUser4.username && details.password == adminUser4.password) {
  console.log("logged in");
  setUser({
    username: details.username,
    password: details.password
   })  
} else if  (details.username == adminUser5.username && details.password == adminUser5.password) {
  console.log("logged in");
  setUser({
    username: details.username,
    password: details.password
   })  
}
else {
  console.log("details do not match!");
  seterror("details do not match!");
}
}
const logout = () => {

setUser ({username:"",password:""});

}


  return (
    <><div className="App">
      {(user.username != "") ? (
        <div className="welcome">
          <h2 className="text-center">Welcome, <span>{user.username}</span></h2>
          <p></p>
          <div className="col-md-4">
            <p></p>
            <label className="form-label">Name Surname</label>
            <input className="form-control" />
          </div>
          <div className="col-md-4">
            <p></p>
            <label className="form-label">Phone Number</label>
            <input className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Education Information</label>
            <textarea className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Experiance</label>
            <textarea className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">E-Mail</label>
            <input className="form-control" />
          </div>
          <div className="col-md-12">
            <label className="form-label">Professional Knowledge and Skills</label>
            <textarea className="form-control" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Verify Information</label>
              <div className="text-center">
                <li> <a href="/congr">SAVE</a> </li>
              </div>
            </div>
          </div>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div><Router>
        <Routes>
          <Route path="/congr" element={<Congr />} />
        </Routes>
      </Router></>

  );
}

export default App;

