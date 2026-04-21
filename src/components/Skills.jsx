export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "PHP"];
  return (
    <section id="skills" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Миний Ур Чадварууд</h2>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s} className="bg-blue-100 text-blue-900 font-semibold p-6 rounded shadow text-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
