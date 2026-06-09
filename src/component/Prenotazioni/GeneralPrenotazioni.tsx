import { useState } from "react";
import { MoveLeft, MapPin, Phone, Clock, User, Home, ChevronDown, Send } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

interface PrenotazioneForm {
  nome: string;
  cognome: string;
  telefono: string;
  via: string;
  civico: string;
  citta: string;
  cap: string;
  data: string;
  ora: string;
  note: string;
}

const orari = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30",
];

export default function GeneralPrenotazioni() {
  const navigate = useNavigate();
  const back = () => navigate("/");

  const [form, setForm] = useState<PrenotazioneForm>({
    nome: "",
    cognome: "",
    telefono: "",
    via: "",
    civico: "",
    citta: "",
    cap: "",
    data: "",
    ora: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const isValid =
    form.nome &&
    form.cognome &&
    form.telefono &&
    form.via &&
    form.civico &&
    form.citta &&
    form.cap &&
    form.data &&
    form.ora;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "white",
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "16px",
    letterSpacing: "0.05em",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif",
    letterSpacing: "0.1em",
    fontSize: "13px",
    color: "rgba(212,175,55,0.85)",
    marginBottom: "6px",
    display: "block",
  };

  const sectionCardStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "24px",
    padding: "24px",
    marginBottom: "16px",
    backdropFilter: "blur(8px)",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif",
    letterSpacing: "0.15em",
    fontSize: "20px",
    background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  if (submitted) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #1a2e35 0%, #2a4a54 50%, #1a2e35 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#D4AF37" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#A3C4BC" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
          style={{ maxWidth: "480px" }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <Send size={32} color="#1a2e35" />
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.15em",
              fontSize: "42px",
              background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
            }}
          >
            Prenotazione Inviata!
          </h2>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.7)",
              fontSize: "18px",
              marginBottom: "32px",
            }}
          >
            Ti contatteremo al numero <span style={{ color: "#D4AF37" }}>{form.telefono}</span> per
            confermare la consegna in{" "}
            <span style={{ color: "#D4AF37" }}>
              {form.via} {form.civico}, {form.citta}
            </span>
          </p>
          <button
            onClick={() => navigate("/")}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.1em",
              fontSize: "18px",
              padding: "14px 36px",
              borderRadius: "16px",
              border: "none",
              background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
              color: "#1a2e35",
              cursor: "pointer",
            }}
          >
            Torna alla Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #1a2e35 0%, #2a4a54 50%, #1a2e35 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#D4AF37" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#A3C4BC" }}
      />

      <div className="relative z-10 py-8 md:py-16 px-4">
        {/* Back button */}
        <div className="flex justify-start p-6">
          <button onClick={back} className="text-white">
            <MoveLeft size={36} />
          </button>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.15em",
                fontSize: "clamp(40px, 8vw, 72px)",
                background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "8px",
              }}
            >
              Ordine a Domicilio
            </h1>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.6)",
                fontSize: "17px",
              }}
            >
              COMPILA I DATI PER LA CONSEGNA
            </p>
          </div>

          {/* Sezione 1 — Dati personali */}
          <motion.div
            style={sectionCardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={sectionTitleStyle}>
              <User size={20} style={{ color: "#D4AF37" }} />
              Dati Personali
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Nome</label>
                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Mario"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Cognome</label>
                <input
                  name="cognome"
                  value={form.cognome}
                  onChange={handleChange}
                  placeholder="Rossi"
                  style={inputStyle}
                />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Phone size={13} />
                    Telefono
                  </span>
                </label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+39 333 000 0000"
                  type="tel"
                  style={inputStyle}
                />
              </div>
            </div>
          </motion.div>

          {/* Sezione 2 — Indirizzo */}
          <motion.div
            style={sectionCardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={sectionTitleStyle}>
              <MapPin size={20} style={{ color: "#D4AF37" }} />
              Indirizzo di Consegna
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-2">
                <label style={labelStyle}>Via / Piazza</label>
                <input
                  name="via"
                  value={form.via}
                  onChange={handleChange}
                  placeholder="Via Roma"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Civico</label>
                <input
                  name="civico"
                  value={form.civico}
                  onChange={handleChange}
                  placeholder="12"
                  style={inputStyle}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label style={labelStyle}>Città</label>
                <input
                  name="citta"
                  value={form.citta}
                  onChange={handleChange}
                  placeholder="Bari"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>CAP</label>
                <input
                  name="cap"
                  value={form.cap}
                  onChange={handleChange}
                  placeholder="70121"
                  maxLength={5}
                  style={inputStyle}
                />
              </div>
            </div>
          </motion.div>

          {/* Sezione 3 — Data e ora */}
          <motion.div
            style={sectionCardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div style={sectionTitleStyle}>
              <Clock size={20} style={{ color: "#D4AF37" }} />
              Data e Ora
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Data</label>
                <input
                  name="data"
                  value={form.data}
                  onChange={handleChange}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  style={{ ...inputStyle, colorScheme: "dark" }}
                />
              </div>
              <div>
                <label style={labelStyle}>Orario</label>
                <div style={{ position: "relative" }}>
                  <select
                    name="ora"
                    value={form.ora}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      paddingRight: "40px",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled style={{ backgroundColor: "#1a2e35" }}>
                      Seleziona orario
                    </option>
                    {orari.map((o) => (
                      <option key={o} value={o} style={{ backgroundColor: "#1a2e35" }}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    style={{
                      position: "absolute",
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgba(212,175,55,0.8)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sezione 4 — Note */}
          <motion.div
            style={sectionCardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div style={sectionTitleStyle}>
              <Home size={20} style={{ color: "#D4AF37" }} />
              Note per la Consegna
            </div>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Es. Citofono rotto, chiamare al telefono. Piano 3, scala B..."
              rows={3}
              style={{
                ...inputStyle,
                resize: "none",
                lineHeight: "1.5",
                fontSize: "15px",
              }}
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-2 mb-16"
          >
            <button
              onClick={handleSubmit}
              disabled={!isValid || loading}
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "20px",
                border: "none",
                background: isValid
                  ? "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)"
                  : "rgba(255,255,255,0.1)",
                color: isValid ? "#1a2e35" : "rgba(255,255,255,0.3)",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.15em",
                fontSize: "22px",
                cursor: isValid ? "pointer" : "not-allowed",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {loading ? (
                <>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid #1a2e35",
                      borderTopColor: "transparent",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }}
                  />
                  Invio in corso...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Conferma Prenotazione
                </>
              )}
            </button>
          </motion.div>

          {/* Footer */}
          <div
            className="mb-8 p-5 rounded-3xl text-center backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(212,175,55,0.10)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                letterSpacing: "0.04em",
              }}
            >
              Le prenotazioni vanno effettuate almeno 30 minuti prima della consegna.
              Ti contatteremo per conferma.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.25);
          font-family: 'Bebas Neue', sans-serif;
        }
        input:focus, select:focus, textarea:focus {
          border-color: rgba(212,175,55,0.5) !important;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7) sepia(1) saturate(3) hue-rotate(5deg);
          cursor: pointer;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}