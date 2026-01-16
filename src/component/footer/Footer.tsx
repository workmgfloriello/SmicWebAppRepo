import { MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Main Footer */}
      <div
        className="relative py-12 px-4"
        style={{
          background: "linear-gradient(180deg, #1a2e35 0%, #0f1c21 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Contatti */}
            <div>
              <div className="space-y-4">
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
              </div>
            </div>

            {/* Orari */}
            <div>
              <h3
                className="text-2xl mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.1em",
                  color: "#D4AF37",
                }}
              >
                Contatti
              </h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Pasquale</span>
                  <a
                    href="tel:+390212345678"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <span>+39 327 235 1925</span>
                  </a>
                </div>
                <div className="flex justify-between">
                  <span>Paolo</span>
                  <a
                    href="tel:+390212345678"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <span>+39 339 361 4193</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h3
                className="text-2xl mb-6 text-center"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.1em",
                  color: "#D4AF37",
                }}
              >
                Seguici Su
              </h3>

              {/* Social Icons */}
              <div className="flex gap-4 align-center justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <Instagram size={24} className="text-white" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <Facebook size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-4 px-4 border-t"
        style={{
          backgroundColor: "#0f1c21",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>
              © {new Date().getFullYear()} Smic Cafè. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#termini" className="hover:text-white transition-colors">
                Termini e Condizioni
              </a>
              <a href="#cookie" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
    </footer>
  );
}
