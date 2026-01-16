import { Clock, MapPin, Phone, History } from "lucide-react";

export function Info() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1a2e35 0%, #2a4a54 50%, #1a2e35 100%)",
        }}
      ></div>

      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#D4AF37" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#A3C4BC" }}
      ></div>

      <div className="relative z-10 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-6xl md:text-7xl mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.15em",
                background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Il Nostro Bar
            </h1>
            <p
              className="text-white/70 text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Tradizione ed eccellenza dal 1985
            </p>
          </div>

          {/* Cards Grid */}
          <div className="space-y-8">
            {/* Storia - Full Width */}
            <div
              className="rounded-3xl p-10 shadow-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                  }}
                >
                  <History size={32} className="text-white" />
                </div>
                <div>
                  <h2
                    className="text-4xl mb-4"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.1em",
                      color: "#D4AF37",
                    }}
                  >
                    La Nostra Storia
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed ">
                    Smić Café nasce nel cuore di Bitonto, in Piazza Aldo Moro,
                    dalla passione per il vero bar italiano. Un luogo dove
                    qualità, tradizione e accoglienza si incontrano ogni giorno:
                    dal caffè espresso alla pasticceria artigianale, fino ai
                    momenti di convivialità che rendono speciale ogni pausa.
                  </p>
                </div>
              </div>
            </div>

            {/* Two Columns Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Orari */}
              <div
                className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "#4D7C8A" }}
                  >
                    <Clock size={28} className="text-white" />
                  </div>
                  <h2
                    className="text-3xl"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.1em",
                      color: "#A3C4BC",
                    }}
                  >
                    Orari
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-white/90">
                    <span className="font-medium">Lun - Dom</span>
                    <span className="text-white">06:00 - 00:00</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex justify-between items-center text-white/90">
                    <span className="font-medium">Martedi</span>
                    <span className="text-white">Chiuso</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex justify-between items-center text-white/90">
                    <span className="font-medium">Sabato</span>
                    <span className="text-white">06:00 - 02:00</span>
                  </div>
                  <div
                    className="mt-6 p-4 rounded-2xl flex items-center gap-3"
                    style={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="text-white font-semibold">
                      Happy Hour 18:00 - 21:00
                    </span>
                  </div>
                </div>
              </div>

              {/* Contatti */}
              <div
                className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                    }}
                  >
                    <Phone size={28} className="text-white" />
                  </div>
                  <h2
                    className="text-3xl"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.1em",
                      color: "#D4AF37",
                    }}
                  >
                    Contatti
                  </h2>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-white/90">
                      <a
                        href="https://www.google.com/maps/place/Smi%C4%87+Caf%C3%A9/@41.1084307,16.6892674,17z/data=!3m1!4b1!4m6!3m5!1s0x1347f1963b5753a3:0xaec842f84688f113!8m2!3d41.1084267!4d16.6918423!16s%2Fg%2F11bztgbt13?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                      >
                        <MapPin
                          size={20}
                          className="text-white/60 group-hover:text-white/90 flex-shrink-0 mt-1"
                        />
                        <span>
                          Piazza Aldo Moro, 6,
                          <br />
                          70032 Bitonto BA
                        </span>
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={22} className="text-white/60 flex-shrink-0" />
                    <span className="text-white/90">
                      <a
                        href="tel:+390212345678"
                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                      >
                        <span>080 917 8435</span>
                      </a>
                    </span>
                  </div>
                </div>

                {/* slogan */}
              </div>
              <div>
                <div className=" text-center">
                  <h1
                    className="text-2xl md:text-6xl font-bold tracking-wider"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 50%, #D4AF37 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Dolcemente Artigianale
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
