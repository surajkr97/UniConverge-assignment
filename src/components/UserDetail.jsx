import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error("Error fetching user:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <img
          src="https://i.gifer.com/ZKZg.gif"
          alt="Loading..."
          className="w-24 h-24"
        />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-gray-600">
        User not found
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gradient-to-r from-sky-100 to-[#00B4D8]/20 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <h1 className="text-3xl font-bold text-center text-[#0077B6] mb-6">
        {user.name}
      </h1>

      <div className="space-y-3 text-lg">
        <p><span className="font-semibold">Username:</span> {user.username}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Website:</span> {user.website}</p>
      </div>

      <div className="mt-6 border-t pt-4 text-lg space-y-2">
        <h2 className="font-bold text-xl text-[#0077B6]">🏢 Company</h2>
        <p><span className="font-semibold">Name:</span> {user.company.name}</p>
        <p><span className="font-semibold">Catch Phrase:</span> {user.company.catchPhrase}</p>
        <p><span className="font-semibold">Business:</span> {user.company.bs}</p>
      </div>

      <div className="mt-6 border-t pt-4 text-lg space-y-2">
        <h2 className="font-bold text-xl text-[#0077B6]">📍 Address</h2>
        <p>
          {user.address.suite}, {user.address.street},<br />
          {user.address.city} - {user.address.zipcode}
        </p>
        <p><span className="font-semibold">Lat:</span> {user.address.geo.lat}</p>
        <p><span className="font-semibold">Lng:</span> {user.address.geo.lng}</p>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/"
          className="bg-[#00B4D8] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0096C7] transition"
        >
          ← Back to Users
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;