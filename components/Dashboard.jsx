'use client';
import '../styles/main.css';

export default function Dashboard(){
 return <main className="container">
 <header>
  <h1>⚛ Virtual Laboratory<br/>Momentum & Impuls</h1>
  <p>Eksplorasi konsep fisika melalui simulasi interaktif berbasis web.</p>
  <div className="physics-ball"></div>
 </header>

 <section className="card">
  <h2>Selamat Datang di Laboratorium Virtual</h2>
  <p>Lakukan eksperimen tumbukan, analisis momentum, dan pahami hukum kekekalan momentum secara visual.</p>
  <button>🚀 Mulai Eksperimen</button>
 </section>

 <section className="grid">
  <div className="card"><h3>🧠 Materi Fisika</h3><p>Momentum, impuls, tumbukan, dan konsep energi.</p></div>
  <div className="card"><h3>🌌 Simulasi Virtual</h3><p>Eksperimen digital dengan visualisasi gerak partikel.</p></div>
  <div className="card"><h3>📊 Evaluasi</h3><p>Kuis interaktif dan rekam aktivitas pembelajaran siswa.</p></div>
 </section>

 <section className="card">
  <h3>🔐 Akses Siswa</h3>
  <input placeholder="Email siswa"/>
  <input placeholder="Password" type="password"/>
  <button>Masuk Laboratorium</button>
 </section>
 </main>
}
