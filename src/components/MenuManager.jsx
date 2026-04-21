import React, { useState } from "react";

export default function MenuManager() {
  const [menus, setMenus] = useState([{ name: "миний тухай", link: "minii_tuhai" }]);
  const [newMenu, setNewMenu] = useState("");
  const [newLink, setNewLink] = useState("");

  const addMenu = () => {
    if (newMenu && newLink) {
      setMenus([...menus, { name: newMenu, link: newLink }]);
      setNewMenu("");
      setNewLink("");
    }
  };

  const deleteMenu = (link) => {
    setMenus(menus.filter((m) => m.link !== link));
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Цэс нэмэх</h3>
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Цэсний нэр"
          value={newMenu}
          onChange={(e) => setNewMenu(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Цэсний холбоос"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={addMenu} className="bg-blue-600 text-white px-4 py-2 rounded">
          Нэмэх
        </button>
      </div>

      <h3 className="font-bold mb-2">Цэсууд</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Цэсний нэр</th>
            <th className="p-2 border">Холбоос</th>
            <th className="p-2 border">Үйлдэл</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((m) => (
            <tr key={m.link}>
              <td className="p-2 border">{m.name}</td>
              <td className="p-2 border">{m.link}</td>
              <td className="p-2 border">
                <button onClick={() => deleteMenu(m.link)} className="text-red-600">
                  Устгах
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
