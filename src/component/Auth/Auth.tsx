import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { MoveLeft, User, Lock, Mail, Eye, EyeOff } from "lucide-react";

type AuthMode = "login" | "register";

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  const switchMode = (next: AuthMode) => {
    if (next === mode) return;
    setForm({ name: "", email: "", password: "", confirm: "" });
    setMode(next);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* ── Background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1a2e35 0%, #2a4a54 50%, #1a2e35 100%)",
        }}
      />
      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#D4AF37" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#A3C4BC" }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0px,transparent 1px,transparent 40px,#fff 40px),repeating-linear-gradient(90deg,#fff 0px,transparent 1px,transparent 40px,#fff 40px)",
        }}
      />

      {/* ── Back button ── */}
      <div className="absolute top-6 left-6 z-20">
        <button onClick={() => navigate("/")} className="text-white/70 hover:text-white transition-colors">
          <MoveLeft size={32} />
        </button>
      </div>

      {/* ── Card ── */}
      <div className="relative z-10 w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl shadow-2xl backdrop-blur-sm border border-white/10 overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          {/* ── Logo / Title ── */}
          <div className="text-center pt-10 pb-6 px-8">
            {/* Golden emblem */}
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
              }}
            >
              <User size={30} className="text-[#1a2e35]" />
            </div>

            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.15em",
                background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(2rem, 8vw, 3rem)",
              }}
            >
              {mode === "login" ? "Bentornato" : "Registrati"}
            </h1>
            <p
              className="text-white/50 text-sm mt-1"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
            >
              {mode === "login"
                ? "ACCEDI AL TUO ACCOUNT"
                : "CREA UN NUOVO ACCOUNT"}
            </p>
          </div>

          {/* ── Toggle ── */}
          <div className="flex mx-8 mb-6 rounded-xl overflow-hidden border border-white/10">
            {(["login", "register"] as AuthMode[]).map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className="flex-1 py-2 text-sm transition-all duration-300 relative"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.1em",
                  backgroundColor: mode === m ? "rgba(212,175,55,0.2)" : "transparent",
                  color: mode === m ? "#F4E5A8" : "rgba(255,255,255,0.4)",
                }}
              >
                {m === "login" ? "ACCEDI" : "REGISTRATI"}
                {mode === m && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "#D4AF37" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── Form ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === "login" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === "login" ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="px-8 pb-8 space-y-4"
            >
              {/* Name — register only */}
              {mode === "register" && (
                <InputField
                  icon={<User size={16} />}
                  label="NOME COMPLETO"
                  name="name"
                  type="text"
                  placeholder="Mario Rossi"
                  value={form.name}
                  onChange={handleChange}
                />
              )}

              {/* Email */}
              <InputField
                icon={<Mail size={16} />}
                label="EMAIL"
                name="email"
                type="email"
                placeholder="mario@esempio.it"
                value={form.email}
                onChange={handleChange}
              />

              {/* Password */}
              <InputField
                icon={<Lock size={16} />}
                label="PASSWORD"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                rightAction={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-white/40 hover:text-white/70 transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                }
              />

              {/* Confirm password — register only */}
              {mode === "register" && (
                <InputField
                  icon={<Lock size={16} />}
                  label="CONFERMA PASSWORD"
                  name="confirm"
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.confirm}
                  onChange={handleChange}
                  rightAction={
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="text-white/40 hover:text-white/70 transition-colors"
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
              )}

              {/* Forgot password */}
              {mode === "login" && (
                <div className="text-right">
                  <button
                    className="text-xs text-white/40 hover:text-[#F4E5A8] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                  >
                    PASSWORD DIMENTICATA?
                  </button>
                </div>
              )}

              {/* Submit */}
              <motion.button
                onClick={handleSubmit}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="w-full py-3 rounded-xl mt-2 font-medium transition-all duration-300 shadow-lg disabled:opacity-60"
                style={{
                  background: loading
                    ? "rgba(212,175,55,0.5)"
                    : "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 100%)",
                  color: "#1a2e35",
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.12em",
                  fontSize: "1.1rem",
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    CARICAMENTO...
                  </span>
                ) : mode === "login" ? (
                  "ACCEDI"
                ) : (
                  "CREA ACCOUNT"
                )}
              </motion.button>

              {/* Divider */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/30 text-xs" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  OPPURE
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Switch mode text */}
              <p className="text-center text-sm text-white/40">
                {mode === "login" ? "Non hai un account? " : "Hai già un account? "}
                <button
                  onClick={() => switchMode(mode === "login" ? "register" : "login")}
                  className="transition-colors hover:text-[#F4E5A8]"
                  style={{ color: "#D4AF37" }}
                >
                  {mode === "login" ? "Registrati" : "Accedi"}
                </button>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-white/30 text-xs mt-6" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}>
          TUTTI I DATI SONO PROTETTI E CRITTOGRAFATI
        </p>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}

/* ── Reusable input field ── */
interface InputFieldProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightAction?: React.ReactNode;
}

function InputField({ icon, label, name, type, placeholder, value, onChange, rightAction }: InputFieldProps) {
  return (
    <div className="space-y-1">
      <label
        className="text-xs text-white/50 block"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-3 rounded-xl px-4 py-3 border border-white/10 focus-within:border-[#D4AF37]/50 transition-all duration-300"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      >
        <span className="text-[#D4AF37]/70 flex-shrink-0">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent text-white/90 text-sm outline-none placeholder-white/25"
        />
        {rightAction}
      </div>
    </div>
  );
}