import React, { useState } from "react";

export default function AdminLogin({ onSuccess, onBack }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "admin") {
      onSuccess();
    } else {
      alert("Нэвтрэх нэр эсвэл нууц үг буруу байна!");
    }
  };

  return (
    <div className="p-8 bg-white shadow my-4 rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Нэвтрэх</h2>
      <input
        placeholder="Нэвтрэх нэр"
        className="border p-2 rounded w-full mb-2"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Нууц үг"
        className="border p-2 rounded w-full mb-2"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={handleLogin}
          className="bg-purple-600 text-white p-2 rounded w-full"
        >
          Нэвтрэх
        </button>
        <button
          onClick={onBack}
          className="bg-gray-400 text-white p-2 rounded w-full"
        >
          Буцах
        </button>
      </div>
    </div>
  );
}
