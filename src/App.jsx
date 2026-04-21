import React, { useState } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [mode, setMode] = useState("user"); // "user" | "login" | "admin"

  return (
    <div>
      {mode === "user" && (
        <>
          <header className="bg-blue-900 text-yellow-400 p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Миний вэб</h1>
            <button
              onClick={() => setMode("login")}
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded shadow font-bold"
            >
              Admin
            </button>
          </header>
          <main className="p-8">
            <section className="text-center my-8">
              <h2 className="text-3xl font-bold">Сайн уу! [Таны нэр]</h2>
              <p className="text-lg text-gray-700">
                Таны ур чадвар, төслүүдийг танилцуулах миний вэб сайт.
              </p>
            </section>
            <Skills />
            <Projects />
            <Contact />
          </main>
          <footer className="bg-blue-900 text-white text-center p-4 mt-8">
            © 2025 танилцуулга вэб
          </footer>
        </>
      )}

      {mode === "login" && <AdminLogin onSuccess={() => setMode("admin")} />}

      {mode === "admin" && <AdminDashboard onLogout={() => setMode("user")} />}
    </div>
  );
}
