"use client";
import { useState, useRef } from "react";

function EyeOpenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#E6E6E6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeClosedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#E6E6E6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const btnRef = useRef(null);

  function handleRipple(e) {
    const btn = btnRef.current;
    if (!btn) return;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();
    circle.style.cssText = `
      position:absolute;
      border-radius:50%;
      background:rgba(10,11,45,0.12);
      transform:scale(0);
      animation:rippleAnim 0.5s linear;
      pointer-events:none;
      width:${diameter}px;
      height:${diameter}px;
      left:${e.clientX - rect.left - radius}px;
      top:${e.clientY - rect.top - radius}px;
    `;
    btn.appendChild(circle);
    circle.addEventListener("animationend", () => circle.remove());
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes rippleAnim { to { transform: scale(5); opacity: 0; } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .animate-fadeUp { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .reset-input::placeholder { color: rgba(230,230,230,0.3); font-weight: 300; }
        .reset-input:focus { outline: none; border-color: rgba(230,230,230,0.45) !important; background: rgba(230,230,230,0.12) !important; box-shadow: 0 0 0 3px rgba(230,230,230,0.07) !important; }
        .reset-input:hover { border-color: #E87722 !important; box-shadow: 0 0 10px rgba(232,119,34,0.35), 0 0 20px rgba(232,119,34,0.15) !important; }
        .reset-btn:hover { border: 1.5px solid #E87722 !important; box-shadow: 0 0 10px rgba(232,119,34,0.45), 0 0 24px rgba(232,119,34,0.2) !important; }
        .eye-btn { position:absolute; right:12px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; padding:4px; display:flex; opacity:0.4; transition:opacity 0.2s; }
        .eye-btn:hover { opacity: 0.8; }
      `}</style>

      {/* PAGE */}
      <div
        className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "#0A0B2D", fontFamily: "'DM Sans', sans-serif", color: "#E6E6E6" }}
      >
        {/* Decorative circles */}
        <div className="absolute rounded-full pointer-events-none"
          style={{ width: 340, height: 340, top: -80, right: 220, background: "rgba(230,230,230,0.06)" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ width: 180, height: 180, top: 60, right: 60, background: "rgba(230,230,230,0.06)" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ width: 90, height: 90, bottom: 100, right: 160, background: "rgba(230,230,230,0.06)" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ width: 55, height: 55, bottom: 200, right: 80, background: "rgba(230,230,230,0.06)" }} />

        {/* FORM */}
        <form
          className="animate-fadeUp w-full z-10 flex flex-col"
          style={{ maxWidth: 340, fontFamily: "'DM Sans', sans-serif", gap: 0 }}
          onSubmit={handleSubmit}
        >
          {/* Title */}
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "2.2rem",
            fontWeight: 700,
            color: "#E6E6E6",
            letterSpacing: "-1px",
            lineHeight: 1,
            marginBottom: 12,
          }}>
            Colocar nova senha
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "0.85rem",
            color: "rgba(230,230,230,0.5)",
            lineHeight: 1.6,
            marginBottom: 32,
          }}>
            Digite e confirme sua nova senha para concluir a redefinição.
          </p>

          {/* Password field */}
          <div style={{ marginBottom: 16 }}>
            <label style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#DCDCDC",
              letterSpacing: "0.01em",
              marginBottom: 7,
            }}>
              Digite sua nova senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="reset-input w-full"
                style={{
                  padding: "13px 40px 13px 16px",
                  background: "rgba(230,230,230,0.08)",
                  border: "1.5px solid rgba(230,230,230,0.15)",
                  borderRadius: 10,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.94rem",
                  color: "#E6E6E6",
                  transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                  width: "100%",
                }}
              />
              <button type="button" className="eye-btn" onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>
                {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
          </div>

          {/* Confirm password field */}
          <div style={{ marginBottom: 16 }}>
            <label style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#DCDCDC",
              letterSpacing: "0.01em",
              marginBottom: 7,
            }}>
              Digite sua senha novamente
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Senha"
                autoComplete="off"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="reset-input w-full"
                style={{
                  padding: "13px 40px 13px 16px",
                  background: "rgba(230,230,230,0.08)",
                  border: "1.5px solid rgba(230,230,230,0.15)",
                  borderRadius: 10,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.94rem",
                  color: "#E6E6E6",
                  transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                  width: "100%",
                }}
              />
              <button type="button" className="eye-btn" onClick={() => setShowConfirm(v => !v)}
                aria-label={showConfirm ? "Ocultar senha" : "Mostrar senha"}>
                {showConfirm ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            ref={btnRef}
            onClick={handleRipple}
            className="w-full relative overflow-hidden reset-btn"
            style={{
              padding: "14px",
              background: "#E6E6E6",
              color: "#0A0B2D",
              border: "1.5px solid transparent",
              borderRadius: 10,
              fontFamily: "'Sora', sans-serif",
              fontSize: "0.97rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(230,230,230,0.15)",
              marginTop: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#DCDCDC";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(230,230,230,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#E6E6E6";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(230,230,230,0.15)";
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Cadastrar
          </button>

          {/* Back to login */}
          <div style={{
            textAlign: "center",
            marginTop: 22,
            fontSize: "0.85rem",
            color: "rgba(230,230,230,0.4)",
          }}>
            Lembrou a senha?{" "}
            <a
              href="#"
              style={{
                color: "#E6E6E6",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid rgba(230,230,230,0.3)",
                paddingBottom: 1,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#E6E6E6")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(230,230,230,0.3)")}
            >
              Voltar ao login
            </a>
          </div>
        </form>
      </div>
    </>
  );
}