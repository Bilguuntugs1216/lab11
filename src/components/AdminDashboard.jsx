import React, { useState, useEffect } from "react";

export default function AdminDashboard({ onLogout, onBack }) {
  const [section, setSection] = useState("menu");
  const [menus, setMenus] = useState([]);
  const [news, setNews] = useState([]);
  const [newMenu, setNewMenu] = useState({ name: "", link: "" });
  const [newNews, setNewNews] = useState({ title: "", desc: "" });

  // --- API дуудлага ---
  useEffect(() => {
    if (section === "menu") {
      fetch("http://localhost/lab11_api/menus.php")
        .then(res => res.json())
        .then(data => setMenus(data));
    } else {
      fetch("http://localhost/lab11_api/news.php")
        .then(res => res.json())
        .then(data => setNews(data));
    }
  }, [section]);

  const addMenu = async () => {
    await fetch("http://localhost/lab11_api/add_menu.php", {
      method: "POST",
      body: new URLSearchParams(newMenu)
    });
    setNewMenu({ name: "", link: "" });
    setSection("menu"); // refresh
  };

  const deleteMenu = async (id) => {
    await fetch("http://localhost/lab11_api/delete_menu.php", {
      method: "POST",
      body: new URLSearchParams({ id })
    });
    setSection("menu"); // refresh
  };

  const addNews = async () => {
    await fetch("http://localhost/lab11_api/add_news.php", {
      method: "POST",
      body: new URLSearchParams(newNews)
    });
    setNewNews({ title: "", desc: "" });
    setSection("news"); // refresh
  };

  const deleteNews = async (id) => {
    await fetch("http://localhost/lab11_api/delete_news.php", {
      method: "POST",
      body: new URLSearchParams({ id })
    });
    setSection("news"); // refresh
  };

  // --- UI ---
  return (
    <div className="p-8 bg-white shadow my-4 rounded">
      <h2 className="text-xl font-bold mb-4">Админ удирдлага</h2>
      <nav className="flex gap-4 my-2">
        <button onClick={() => setSection("menu")} className="px-2 py-1 bg-gray-200 rounded">
          Цэс удирдах
        </button>
        <button onClick={() => setSection("news")} className="px-2 py-1 bg-gray-200 rounded">
          Мэдээ удирдах
        </button>
        <button onClick={onBack} className="px-2 py-1 bg-gray-400 text-white rounded">
          Буцах
        </button>
        <button onClick={onLogout} className="px-2 py-1 bg-red-500 text-white rounded">
          Гарах
        </button>
      </nav>

      {section === "menu" && (
        <div>
          <h3 className="font-semibold mb-2">Цэсний жагсаалт</h3>
          <ul>
            {menus.map(m => (
              <li key={m.id} className="flex justify-between">
                <span>{m.name} – {m.link}</span>
                <button onClick={() => deleteMenu(m.id)} className="text-red-600">Устгах</button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              placeholder="Цэсний нэр"
              value={newMenu.name}
              onChange={e => setNewMenu({ ...newMenu, name: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              placeholder="Линк"
              value={newMenu.link}
              onChange={e => setNewMenu({ ...newMenu, link: e.target.value })}
              className="border p-2 mr-2"
            />
            <button onClick={addMenu} className="bg-green-500 text-white px-4 py-2 rounded">
              Нэмэх
            </button>
          </div>
        </div>
      )}

      {section === "news" && (
        <div>
          <h3 className="font-semibold mb-2">Мэдээний жагсаалт</h3>
          <ul>
            {news.map(n => (
              <li key={n.id} className="flex justify-between">
                <span>{n.title} – {n.desc}</span>
                <button onClick={() => deleteNews(n.id)} className="text-red-600">Устгах</button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              placeholder="Гарчиг"
              value={newNews.title}
              onChange={e => setNewNews({ ...newNews, title: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              placeholder="Тайлбар"
              value={newNews.desc}
              onChange={e => setNewNews({ ...newNews, desc: e.target.value })}
              className="border p-2 mr-2"
            />
            <button onClick={addNews} className="bg-green-500 text-white px-4 py-2 rounded">
              Нэмэх
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
