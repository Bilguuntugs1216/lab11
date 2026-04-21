import React, { useState } from "react";

export default function NewsManager() {
  const [news, setNews] = useState([
    { title: "Төсөл 1", desc: "Энэ бол миний эхний төсөл" },
    { title: "Төсөл 2", desc: "Энэ бол дараагийн төсөл" }
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const addNews = () => {
    if (newTitle && newDesc) {
      setNews([...news, { title: newTitle, desc: newDesc }]);
      setNewTitle("");
      setNewDesc("");
    }
  };

  const deleteNews = (title) => {
    setNews(news.filter((n) => n.title !== title));
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Мэдээ удирдах</h3>
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Мэдээний гарчиг"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Мэдээний тайлбар"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={addNews} className="bg-blue-600 text-white px-4 py-2 rounded">
          Нэмэх
        </button>
      </div>

      <ul className="mt-4">
        {news.map((n) => (
          <li key={n.title} className="border p-2 rounded my-2">
            <h4 className="font-semibold">{n.title}</h4>
            <p>{n.desc}</p>
            <button
              onClick={() => deleteNews(n.title)}
              className="text-red-600 mt-2"
            >
              Устгах
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
