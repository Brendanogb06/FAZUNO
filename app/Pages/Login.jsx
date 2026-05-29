"use client"; 
import '../styles/Login.css';


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

export default function Login() {
  const username = "";
const password = "";
const showPassword = false;

const setUsername = () => {};
const setPassword = () => {};
const togglePassword = () => {};
const handleRipple = () => {};
const handleSubmit = (e) => e.preventDefault();

const btnRef = null;

  return (
    <div className="page">

      {/* Círculos decorativos no fundo */}
      <div className="bg-dot bd1" />
      <div className="bg-dot bd2" />
      <div className="bg-dot bd3" />
      <div className="bg-dot bd4" />

      {/* ── BLOB BRANCO (esquerda) ── */}
      <div className="blob-wrap">
        <div className="blob" />
        <div className="blob-inner">

          {/* Área de mídia unificada e centralizada */}
          <div className="anim-space">
            <video
              className="anim-video"
              src="/animacao_FazUno.mp4" 
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Nome da marca posicionado logo abaixo do vídeo */}
            <img 
              className="brand-name-img" 
              src="/imagem_nome_fazuno.jpeg" 
              alt="FazUno" 
            />
          </div>

        </div>
      </div>

      {/* ── FORMULÁRIO (direita) ── */}
      <div className="panel-right">
        <form className="login-form" onSubmit={handleSubmit}>

          <h1 className="login-title">Login</h1>

          <div className="field">
            <label className="field-label">Usuário</label>
            <div className="field-input-wrap">
              <input
                type="text"
                placeholder="Digite seu usuário"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="field field--no-margin">
            <label className="field-label">Senha</label>
            <div className="field-input-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="eye-btn"
                onClick={togglePassword}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
          </div>

          <div className="forgot">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button
            type="submit"
            className="btn-submit"
            ref={btnRef}
            onClick={handleRipple}
          >
            Entrar
          </button>

          <div className="register">
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </div>

        </form>
      </div>

      <div className="page-footnote">
        Algum problema? Fale conosco em<br />
        <a href="mailto:suporte@fazuno.com">suporte@fazuno.com</a>
      </div>

    </div>
  );
}