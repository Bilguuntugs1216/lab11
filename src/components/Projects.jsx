import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost/lab11_api/news.php")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2>Бүтээсэн төсөл</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> – {p.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
