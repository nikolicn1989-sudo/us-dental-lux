"use client";

import { useState } from "react";
import Link from "next/link";

export default function ZakaziPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    telefon: "",
    mejl: "",
    usluga: "Pregled i konsultacije",
    poruka: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-900 font-sans selection:bg-slate-900 selection:text-white antialiased flex flex-col justify-between relative bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
      {/* Blagi preliv preko pozadinske slike ordinacije */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/80 backdrop-blur-[1px] pointer-events-none"></div>

      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 cursor-pointer group">
            <img 
              src="/logo.png" 
              alt="US Dental Lux Logo" 
              className="h-14 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
            />
            <div 
              className="text-xl md:text-2xl font-extrabold tracking-wider text-slate-900 uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              US DENTAL <span className="text-slate-400 font-bold tracking-widest">LUX</span>
            </div>
          </Link>
          
          <Link 
            href="/" 
            className="text-sm font-bold text-slate-700 hover:text-black transition flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full border border-slate-200 shadow-sm"
          >
            &larr; Nazad na početnu
          </Link>
        </div>
      </nav>

      {/* Forma sa pozadinom ordinacije */}
      <section className="py-16 px-6 flex-grow flex items-center justify-center relative z-10">
        <div className="max-w-2xl w-full bg-white/95 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/80 shadow-2xl shadow-slate-900/10">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
              Online Rezervacija
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Zakažite Vaš termin
            </h1>
            <p className="text-slate-600 text-sm">
              Popunite formu ispod, a naš tim će vas kontaktirati u najkraćem roku radi potvrde termina.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg">
                ✓
              </div>
              <h3 className="text-2xl font-black text-slate-900">Uspešno ste poslali zahtev!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Hvala vam, <strong className="text-slate-900">{formData.ime}</strong>. Primili smo vaš zahtev za uslugu <strong className="text-slate-900">({formData.usluga})</strong>. Pozvaćemo vas na broj <strong className="text-slate-900">{formData.telefon}</strong> uskoro.
              </p>
              <div className="pt-4">
                <Link 
                  href="/" 
                  className="inline-block px-8 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition shadow-md"
                >
                  Povratak na početnu stranu
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Ime *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Unesite vaše ime"
                    value={formData.ime}
                    onChange={(e) => setFormData({...formData, ime: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f8f9fa] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Prezime *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Unesite vaše prezime"
                    value={formData.prezime}
                    onChange={(e) => setFormData({...formData, prezime: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f8f9fa] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Broj telefona *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="npr. 066 9197060"
                    value={formData.telefon}
                    onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f8f9fa] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Email adresa *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="vasa.adresa@gmail.com"
                    value={formData.mejl}
                    onChange={(e) => setFormData({...formData, mejl: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f8f9fa] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">Izaberite vrstu usluge / intervencije</label>
                <select 
                  value={formData.usluga}
                  onChange={(e) => setFormData({...formData, usluga: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#f8f9fa] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition cursor-pointer shadow-inner"
                >
                  <option value="Pregled i konsultacije">Pregled i konsultacije</option>
                  <option value="Popravka zuba / Plomba">Popravka zuba / Plomba</option>
                  <option value="Zubni implanti / All on 4/6">Zubni implanti / All on 4/6</option>
                  <option value="Cirkonijumske / Bezmetalne krune">Cirkonijumske / Bezmetalne krune</option>
                  <option value="Hollywood smile / Viniri">Hollywood smile / Viniri</option>
                  <option value="Beljenje zuba">Beljenje zuba</option>
                  <option value="Oralna hirurgija (vađenje zuba/umnjaka)">Oralna hirurgija (vađenje zuba/umnjaka)</option>
                  <option value="3D snimanje i dijagnostika">3D snimanje i dijagnostika</option>
                  <option value="Ostalo">Ostalo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">Dodatni zahtev ili napomena (opciono)</label>
                <textarea 
                  rows={4}
                  placeholder="Napišite nam detalje o vašem problemu ili željenoj usluzi..."
                  value={formData.poruka}
                  onChange={(e) => setFormData({...formData, poruka: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#f8f9fa] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition resize-none shadow-inner"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-base hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 cursor-pointer"
              >
                Pošalji zahtev za zakazivanje
              </button>
            </form>
          )}

        </div>
      </section>

      <footer className="py-6 text-center text-xs text-slate-700 border-t border-slate-200/60 bg-white/80 backdrop-blur-md relative z-10">
        US Dental Lux &bull; Dr Ilije Kolovića 10, Kragujevac &bull; 066 9197060
      </footer>
    </main>
  );
}