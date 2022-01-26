import "./styles/css/style.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/navbar/Menu";

import { auth } from "./auth/firebase-config";
import {
  onAuthStateChanged
} from "firebase/auth";

function App() {

  const [user, setUser] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path = "/" element= {<Navigate to="/login" />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/home" element={user?<HomeContainer/>: <Navigate to="/login" />} />
        <Route path="/feed" element={user?<FeedContainer/>: <Navigate to="/login" />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </div>
  );
}

export default App;
