import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddUser = ({ onAddUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "N/A",
      company: { name: formData.company || "Independent" },
    };

    onAddUser(newUser);
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto m-32 bg-white p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-[#0077B6] mb-6">
        👤 Add User
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded focus:ring-2 focus:ring-sky-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded focus:ring-2 focus:ring-sky-400"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded focus:ring-2 focus:ring-sky-400"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border p-2 rounded focus:ring-2 focus:ring-sky-400"
        />

        <button
          type="submit"
          className="bg-[#00B4D8] text-white py-2 rounded-lg font-semibold hover:bg-[#0096C7] transition"
        >
          Add User
        </button>
      </form>

      <div className="text-center mt-4 mb-12">
        <Link
          to="/"
          className="text-[#0077B6] font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AddUser;