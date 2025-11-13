import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../assets/404.png";
import Searchbar from "./Searchbar";

const Card = ({ userSearch, setUserSearch, localUsers = [] }) => {
  const [apiUsers, setApiUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setApiUsers(users);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <img
        src="https://i.gifer.com/ZKZg.gif"
        alt="Loading animation"
        className="mx-auto w-36 h-36"
      />
    );
  }

  const allUsers = [...localUsers, ...apiUsers];

  const filteredUsers = allUsers.filter((user) => {
    if (!userSearch) return true;
    const search = userSearch.toLowerCase();
    return (
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.phone.toLowerCase().includes(search) ||
      user.company.name.toLowerCase().includes(search)
    );
  });

  return (
    <>
    <Searchbar setUserSearch={setUserSearch} />
      <h1 className="flex justify-center m-10 text-2xl md:text-3xl text-white">
        🔴 Live User Data
      </h1>
      <div className="flex flex-wrap justify-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              className="bg-gradient-to-r from-sky-200 to-[#00B4D8] shadow-xl m-4 p-4 rounded-xl text-center flex flex-col gap-3 w-72 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <h1 className="font-bold text-xl">{user.name}</h1>
              <p className="font-medium">{user.email}</p>
              <p className="font-medium">{user.phone}</p>
              <p className="font-semibold">{user.company.name}</p>
            </div>
          ))
        ) : (
          <img
            src={NotFoundImage}
            alt="Data not found"
            className="mx-auto w-64 h-64"
          />
        )}
      </div>
    </>
  );
};

export default Card;
