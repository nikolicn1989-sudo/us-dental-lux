"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Marko Stefanović",
      tag: "Google Verified Review",
      time: "Pre 2 nedelje",
      text: "Apsolutno profesionalno! Atmosfera je opuštajuća, usluga na svetskom nivou, a intervencija je prošla potpuno bez ikakvog bola. Preporuka svima u Kragujevcu!",
      initials: "MS"
    },
    {
      id: 2,
      name: "Jovana Nikolić",
      tag: "Google Verified Review",
      time: "Pre 1 mesec",
      text: "Dugo sam tražio ordinaciju kojoj mogu potpuno da verujem. US Dental Lux je pun pogodak. Izuzetna posvećenost detaljima i savremena oprema.",
      initials: "JN"
    },
    {
      id: 3,
      name: "Nikola Petrović",
      tag: "Google Verified Review",
      time: "Pre 2 meseca",
      text: "Vrhunska usluga u Dr Ilije Kolovića! Ordinacija izgleda svetski, osoblje je ljubazno, a rezultati prevazilaze sva očekivanja. Moja ocena je čista desetka!",
      initials: "NP"
    },
    {
      id: 4,
      name: "Ana Ilić",
      tag: "Google Verified Review",
      time: "Pre 3 nedelje",
      text: "Najprijatnije stomatološko iskustvo do sada. Doktori su izuzetno pažljivi, a ambijent odiše čistocom i luksuzom. Sve pohvale za ceo tim!",
      initials: "AI"
    },
    {
      id: 5,
      name: "Stefan Đorđević",
      tag: "Google Verified Review",
      time: "Pre nedelju dana",
      text: "Brzo, efikasno i bez ikakve nelagodnosti. Cene su izuzetno korektne za kvalitet usluge koji se dobija. Definitivno moja stalna stomatološka ordinacija.",
      initials: "SĐ"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-900 selection:text-white antialiased">
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group">
            <img 
              src="/logo.png" 
              alt="US Dental Lux Logo" 
              className="h-16 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
            />
            <div 
              className="text-xl md:text-2xl font-extrabold tracking-wider text-slate-900 uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              US DENTAL <span className="text-slate-400 font-bold tracking-widest">LUX</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600 relative">
            <a href="#lokacija" className="hover:text-black transition-colors">Lokacija</a>
            <a href="#iskustva" className="hover:text-black transition-colors">Iskustva</a>
            <a href="#o-nama" className="hover:text-black transition-colors">O nama</a>
            <a href="#cenovnik" className="hover:text-black transition-colors">Cenovnik</a>

            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-none font-semibold text-sm text-slate-600 focus:outline-none py-2"
              >
                Kontakt <span className={`text-[10px] transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isContactOpen && (
                <div className="absolute right-0 top-full mt-3 w-80 bg-white/95 backdrop-blur-3xl border border-slate-200/85 shadow-2xl rounded-3xl p-6 z-50 animate-in fade-in slide-in-from-top-3 duration-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Telefon</h4>
                      <a href="tel:0669197060" className="text-base font-bold text-slate-900 hover:text-slate-600 transition">
                        066 9197060
                      </a>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Adresa</h4>
                      <p className="text-sm font-semibold text-slate-800 leading-snug">
                        Dr Ilije Kolovića 10,<br />Kragujevac 34000
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Radno vreme</h4>
                      <p className="text-sm font-semibold text-slate-800">
                        Ponedeljak – Petak<br />
                        <span className="text-emerald-600 font-bold">10:00 – 18:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-48 md:min-h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/84 to-white/60 backdrop-blur-[0.3px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">Vodeća stomatologija u Kragujevcu</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Budućnost vašeg <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 underline decoration-slate-300 decoration-wavy decoration-2">savršenog osmeha</span>.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Spoj vrhunske američke tehnologije, apsolutno bezbolnih intervencija i beskompromisnog estetskog kvaliteta na jednom mestu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/zakazi" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-base hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/25 hover:-translate-y-1 hover:shadow-slate-900/40">
                Zakaži termin
              </Link>
              <a href="#cenovnik" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/90 border border-slate-200 text-slate-900 font-bold text-base hover:bg-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Cenovnik
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-300/60 max-w-lg">
              <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">10+</p>
                <p className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-1">Godina prakse</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">3.5k+</p>
                <p className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-1">Srećnih pacijenata</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">100%</p>
                <p className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-1">Bezbolno</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/90 shadow-2xl shadow-slate-400/20 relative group hover:shadow-3xl transition-all duration-500">
              
              <div className="absolute -top-5 -right-4 bg-slate-900 text-white font-bold text-xs px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-1.5 border border-slate-700">
                <span className="text-amber-400">★</span> 5.0 Google Ocena
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-900 border border-slate-200 shadow-inner">
                  🦷
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Američki standard u Kragujevcu</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Koristimo najnaprednije dijagnostičke metode i materijale najviše klase iz Sjedinjenih Američkih Država.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 bg-slate-50/90 p-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                    Digitalni osmeh i 3D simulacija
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 bg-slate-50/90 p-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                    Implantologija bez hirurškog stresa
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 bg-slate-50/90 p-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                    Ekskluzivne stomatološke fasete
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* O nama */}
      <section id="o-nama" className="py-28 bg-[#f2f4f7] border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-600 bg-white px-4 py-1.5 rounded-full border border-slate-300/70 shadow-sm">
                O našoj ordinaciji
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Vrhunska stomatologija sa vizijom savršenstva.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Osnovani sa idejom da pacijentima u Kragujevcu pružimo apsolutno najviši svetski standard stomatološke zaštite. <strong className="text-slate-900">US Dental Lux</strong> kombinuje decenijsko iskustvo, vrhunske materijale iz SAD i najsavremeniju tehnologiju.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Nalazimo se na adresi <strong className="text-slate-900">Dr Ilije Kolovića 10</strong>. Naš cilj je da svaka poseta ordinaciji protekne u prijatnoj atmosferi, bez stresa, bola i sa dugovečnim estetskim rezultatima koji vraćaju samopouzdanje.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <span className="block text-3xl font-black text-slate-900 mb-1">100%</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Bezbolne intervencije</span>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <span className="block text-3xl font-black text-slate-900 mb-1">SAD</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Standardi i oprema</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                  <span className="text-3xl">✨</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Estetska preciznost</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Vrhunske keramičke fasete i izbeljivanje zuba najnovijim metodama.</p>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl shadow-slate-900/20">
                  <span className="text-3xl">🔬</span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2">3D Dijagnostika</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Precizno planiranje terapije uz digitalne snimke i 3D simulacije osmeha.</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl shadow-slate-900/20">
                  <span className="text-3xl">🛡️</span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2">Implantologija</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Ugradnja najkvalitetnijih implantata sa doživotnom garancijom.</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                  <span className="text-3xl">💎</span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2">Lux Ambijent</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Moderan enterijer kreiran da se osećate opušteno i sigurno tokom svake posete.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cenovnik */}
      <section id="cenovnik" className="py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
              Transparentne cene
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Naš cenovnik usluga
            </h2>
            <p className="text-slate-600 text-base">
              Ažuriran cenovnik stomatoloških usluga sa jasno prikazanim cenama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-[2.5rem] border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex justify-between items-center">
                <span>Implantologija i Protetika</span>
                <span className="text-[11px] font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">Premium</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>ALL ON 6</span>
                  <span className="font-bold text-slate-900">3500-4500 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>ALL ON 4</span>
                  <span className="font-bold text-slate-900">3500-4500 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Proteza na lokatorima</span>
                  <span className="font-bold text-slate-900">1500-2500 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Zubni implanti</span>
                  <span className="font-bold text-slate-900">400-650 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Cirkonijumske krune</span>
                  <span className="font-bold text-slate-900">200 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Bezmetalne krune</span>
                  <span className="font-bold text-slate-900">200 evra</span>
                </li>
                <li className="flex justify-between py-1.5">
                  <span>Keramički zubi</span>
                  <span className="font-bold text-slate-900">100-120 evra</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-[2.5rem] border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex justify-between items-center">
                <span>Estetika i Intervencije</span>
                <span className="text-[11px] font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">Standard SAD</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Hollywood smile</span>
                  <span className="font-bold text-slate-900">6000-8000 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Zubni viniri</span>
                  <span className="font-bold text-slate-900">200 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Luminiri</span>
                  <span className="font-bold text-slate-900">250 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>One smile</span>
                  <span className="font-bold text-slate-900">600-1000 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Beljenje zuba</span>
                  <span className="font-bold text-slate-900">200 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Lasersko beljenje zuba</span>
                  <span className="font-bold text-slate-900">250 evra</span>
                </li>
                <li className="flex justify-between py-1.5">
                  <span>Folije za ispravljanje zuba</span>
                  <span className="font-bold text-slate-900">80.000 dinara</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-[2.5rem] border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex justify-between items-center">
                <span>Oralna hirurgija i Popravke</span>
                <span className="text-[11px] font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">Hirurgija</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Popravke zuba</span>
                  <span className="font-bold text-slate-900">30-50 evra</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>Hiruško vađenje zuba</span>
                  <span className="font-bold text-slate-900">50-150 evra</span>
                </li>
                <li className="flex justify-between py-1.5">
                  <span>Hiruško vađenje umnjaka</span>
                  <span className="font-bold text-slate-900">50-150 evra</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-[2.5rem] border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex justify-between items-center">
                <span>Dijagnostika</span>
                <span className="text-[11px] font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">Tehnologija</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
                <li className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span>3d snimanje zuba</span>
                  <span className="font-bold text-slate-900">50 evra</span>
                </li>
                <li className="flex justify-between py-1.5">
                  <span>Digitalni otisak</span>
                  <span className="font-bold text-slate-900">30 evra</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-xl font-bold tracking-tight">Imate specifičan stomatološki problem?</h4>
              <p className="text-slate-400 text-sm mt-1">Kontaktirajte nas za besplatne konsultacije i plan terapije.</p>
            </div>
            <a href="tel:0669197060" className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg hover:scale-105 whitespace-nowrap">
              Kontaktiraj nas
            </a>
          </div>
        </div>
      </section>

      {/* SEKCIJA: Google Maps Lokacija (Pouzdan embed format) */}
      <section id="lokacija" className="py-28 bg-[#f2f4f7] border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
              Pronađite nas
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Naša lokacija u Kragujevcu
            </h2>
            <p className="text-slate-600 text-base">
              Nalazimo se na adresi <strong className="text-slate-900">Dr Ilije Kolovića 10</strong>. Posetite nas u modernom ambijentu ordinacije.
            </p>
          </div>

          <div className="bg-white p-4 rounded-[2.5rem] border border-slate-200/80 shadow-2xl overflow-hidden">
            <div className="w-full h-[450px] rounded-[2rem] overflow-hidden">
              <iframe
                title="US Dental Lux Lokacija"
                src="https://maps.google.com/maps?q=Dr+Ilije+Kolovica+10+Kragujevac&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA: Google Iskustva sa Slajderom */}
      <section id="iskustva" className="py-28 bg-[#fafafa] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
              Google Recenzije
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Šta kažu naši pacijenti?
            </h2>
            <p className="text-slate-600 text-base">
              Ponosni smo na našu čistu peticu i poverenje koje nam pacijenti ukazuju iz dana u dan.
            </p>
          </div>

          <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-2xl shadow-slate-200/50 flex flex-col justify-between min-h-[300px] transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500 text-base">
                  ★★★★★ <span className="text-slate-400 text-xs ml-3 font-semibold">{reviews[currentReview].time}</span>
                </div>
                <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                  {currentReview + 1} / {reviews.length}
                </span>
              </div>
              
              <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-medium italic">
                &ldquo;{reviews[currentReview].text}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-200/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {reviews[currentReview].initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{reviews[currentReview].name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{reviews[currentReview].tag}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={prevReview}
                  className="w-12 h-12 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm cursor-pointer"
                  aria-label="Prethodna recenzija"
                >
                  &larr;
                </button>
                <button 
                  onClick={nextReview}
                  className="w-12 h-12 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm cursor-pointer"
                  aria-label="Sledeća recenzija"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentReview === index ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Idi na recenziju ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}