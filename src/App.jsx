import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import UserDetail from "./components/UserDetail";
import AddUser from "./components/AddUser";
import Footer from "./components/Footer";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Card
                userSearch={userSearch}
                setUserSearch={setUserSearch}
                localUsers={users}
              />
            }
          />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route
            path="/add-user"
            element={<AddUser onAddUser={handleAddUser} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
