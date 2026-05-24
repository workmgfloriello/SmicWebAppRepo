import "./Homepage.css";
import { useState, useEffect, useMemo } from "react";
import { Menu, Calendar, Sparkles, Clock } from "lucide-react";
import { GeneralMenu } from "../Menu/GeneralMenu";
import Logo from "../../assets/logo/logoNoBG.svg";
import BG from "../../assets/img/bgHome.jpg";
import LogoMixology from "../../assets/logo/ppMixology.jpeg";
import { useNavigate } from "react-router";

export function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const navivate = useNavigate();

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId); // Pulizia
  }, []);

  const isOpen = useMemo(() => {
    const hours = date.getHours();
    return hours >= 6 && hours < 24; // Ritorna true/false direttamente
  }, [date]);

  const updateMenuState = (isOpen: boolean) => {
    setMenuOpen(isOpen);
  };

  const onClickPrenotaOra = () => {
    //controllare se l'utente è loggato, se sì mostrare il form di prenotazione, altrimenti mostrare il form di login
    let isLoggedIn = false; // Simulazione dello stato di login
    if (isLoggedIn) {
      alert("Funzione Prenotazione non implementata");
    } else {
      navivate("/auth");
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Logo */}
        <header className="pt-6 pb-8 px-4">
          <div className="flex justify-center">
            <div
              className="rounded-2xl p-1 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 50%, #D4AF37 100%)",
              }}
            >
              <div className="bg-white rounded-xl p-6 shadow-inner">
                <img
                  src={Logo}
                  alt="Bar Logo"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </header>

        <div>
          <div className="flex justify-center items-center gap-2 mb-4">
            <Clock className="text-white opacity-80" size={20} />
            <span
              className="text-white text-sm opacity-90"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              {isOpen ? (
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#3cd437ff" }}
                  ></div>
                  <p>Ora Aperti</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#da1919ff" }}
                  ></div>
                  <p>Ora Chiusi</p>
                </div>
              )}
            </span>
          </div>
        </div>

        {/* Main Content - Stylish Button Layout */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
          <div className="w-full max-w-sm space-y-5">
            {/* Menu Button - Large Featured */}
            <div
              className="relative group cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#4D7C8A" }}
              ></div>
              <button
                className="relative w-full py-6 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-between overflow-hidden"
                style={{
                  backgroundColor: "#4D7C8A",
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <Menu size={28} className="text-white" />
                  </div>
                  <span className="text-white text-3xl tracking-wider">
                    MENU
                  </span>
                </div>
                <Sparkles className="text-white opacity-60" size={24} />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Two Column Layout for Other Buttons */}

            {/* Prenota Ora Button */}
            <div className="relative group cursor-pointer" onClick={() => onClickPrenotaOra()}>
              <div
                className="absolute inset-0 rounded-xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                style={{ backgroundColor: "#D4AF37" }}
              ></div>
              <button
                className="relative w-full py-4  rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-3 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 50%, #D4AF37 100%)",
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/30">
                  <Calendar size={28} style={{ color: "#4D7C8A" }} />
                </div>
                <span
                  style={{ color: "#4D7C8A" }}
                  className="text-xl tracking-wide text-center leading-tight"
                >
                  PRENOTA
                  <br />
                  ORA
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* La Tua Carta Button ppMixology */}
            <div className="relative group" onClick={() => alert("Funzione La Tua Carta non implementata")}>
              <div
                className="absolute inset-0 rounded-xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                style={{ backgroundColor: "#A3C4BC" }}
              ></div>
              <button
                className="relative w-full h-24 rounded-xl shadow-xl overflow-hidden flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#A3C4BC",
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {/* IMAGE COVER - 30% */}
                <div className="w-[30%] h-full">
                  <img
                    src={LogoMixology}
                    alt="Bar Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXT - 70% */}
                <div className="w-[70%] px-6">
                  <span className="block text-xl font-bold tracking-wide bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
                    @_ppmixology
                  </span>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </button>
            </div>
          </div>
        </main>
        <div className="flex justify-center animate-bounce w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && <GeneralMenu updateMenuState={updateMenuState} />}

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}
