import { useEffect, useState } from "react";
import ProdottiService from "../../../service/prodottiService";
import { Coffee, MoveLeft, Wine } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import type { ProdottiResponse, Prodotto } from "../../../interface/product";

export default function CategoryMenu() {
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("menu");

  const [products, setProducts] = useState<ProdottiResponse>({
    prodotti: [],
    totalCount: 0,
  });
  const [loading, setLoading] = useState(true); // 🟢 stato loading

  const [showVariant, setShowVariant] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 0);

    const service = new ProdottiService(categoria || "");
    service.getProdotti().then((data) => {
      setProducts({
        prodotti: data as Prodotto[],
        totalCount: data?.length || 0,
      });
      setLoading(false);
    });
  }, [categoria]);

  const getIcon = () => {
    if (categoria == "caffetteria") return <Coffee />;
    if (categoria == "bevande e vini") return <Wine />;
  };

  const navigate = useNavigate();
  const back = () => navigate("/");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background e elementi decorativi */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1a2e35 0%, #2a4a54 50%, #1a2e35 100%)",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#D4AF37" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#A3C4BC" }}
      ></div>

      <div className="relative z-10 py-8 md:py-16 px-4">
        <div className="flex justify-start p-6">
          <button onClick={back} className="text-white">
            <MoveLeft size={36} />
          </button>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h1
              className="text-4xl md:text-7xl mb-3 md:mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.15em",
                background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Il Nostro Menu
            </h1>
            <p
              className="text-white/70 text-base md:text-lg max-w-2xl mx-auto px-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {categoria?.toUpperCase()}
            </p>
          </div>

          {/* Grid Prodotti */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xl backdrop-blur-sm border border-white/10 animate-pulse"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="h-6 bg-white/20 rounded w-2/3 mb-3"></div>
                    <div className="h-6 bg-white/10 rounded w-1/4"></div>
                  </div>
                ))
              : products.prodotti.map(
                  (product, index) => (
                    console.log(product),
                    (
                      <motion.div
                        key={index}
                        className="rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                        initial={{ opacity: 0 }}
                        whileInView={{
                          opacity: 1,
                          transition: { duration: 0.6, delay: 0.2 },
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                      >
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-3 md:gap-4 flex-1">
                            <div
                              className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                              style={{
                                background:
                                  "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                              }}
                            >
                              <span className="text-white">{getIcon()}</span>
                            </div>
                            <span className="font-medium text-white/90 text-base md:text-lg">
                              {product.nome}
                            </span>
                          </div>
                          <div
                            className="text-xl md:text-2xl px-3 md:px-4 py-1 md:py-2 rounded-xl shadow-lg"
                            style={{
                              background:
                                "linear-gradient(135deg, #4D7C8A 0%, #5A8C9C 100%)",
                              color: "#F4E5A8",
                              fontFamily: "'Bebas Neue', sans-serif",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {product.prezzo === 0
                              ? "Su richiesta"
                              : `€${product.prezzo.toFixed(2)}`}
                          </div>
                          {Array.isArray(product.variante) &&
                          product.variante.length > 0 ? (
                            <div
                              className="flex justify-center basis-full "
                              onClick={() => setShowVariant(!showVariant)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white/70 ml-2"
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

                              <p className="font-light text-white/90 text-base">
                                Scopri le nostre varianti
                              </p>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white/70 ml-2"
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
                          ) : null}

                          {Array.isArray(product.variante) && showVariant && (
                            <div className="mt-4 w-full">
                              {product.variante.map((variante, vIndex) => (
                                <div
                                  className="flex items-center justify-evenly gap-4 flex-wrap mb-4"
                                  key={vIndex}
                                >
                                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                                    <span className="font-medium text-white/90 text-base md:text-lg">
                                      {variante.nome}
                                    </span>
                                  </div>

                                  <div className="text-xl md:text-2xl px-3 md:px-4 py-1 md:py-2 rounded-xl shadow-lg bg-gradient-to-br from-[#4d7c8a]to-[#5a8c9c] text-[#f4e5a8] font-['Bebas_Neue'] tracking-wider  ">
                                    {variante.type === "same"
                                    ? `€${product.prezzo.toFixed(2)}`
                                    : variante.type === "extra"
                                    ? `+${variante.prezzo.toFixed(2)}€`
                                    : `-${variante.prezzo.toFixed(2)}€`}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )
                  ),
                )}
          </div>

          {/* Footer Note */}
          <div
            className="mt-8 md:mt-16 p-5 md:p-6 rounded-2xl md:rounded-3xl text-center backdrop-blur-sm border border-white/10"
            style={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}
          >
            <p className="text-white/90 text-sm md:text-base">
              Tutti i prezzi sono espressi in euro. I prodotti possono contenere
              allergeni.
            </p>
            <p>{products.totalCount} prodotti disponibili</p>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
