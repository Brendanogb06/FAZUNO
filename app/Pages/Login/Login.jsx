"use client";

export default function Login() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0A0B2D] font-sans text-[#E6E6E6]">
      <div className="w-screen h-screen flex items-center justify-start relative overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute rounded-full bg-[rgba(230,230,230,0.06)] w-[340px] h-[340px] -top-20 right-[220px]" />
        <div className="absolute rounded-full bg-[rgba(230,230,230,0.06)] w-[180px] h-[180px] top-[60px] right-[60px]" />
        <div className="absolute rounded-full bg-[rgba(230,230,230,0.06)] w-[90px] h-[90px] bottom-[100px] right-[160px]" />
        <div className="absolute rounded-full bg-[rgba(230,230,230,0.06)] w-[55px] h-[55px] bottom-[200px] right-[80px]" />

        {/* Blob lado esquerdo */}
        <div
          className="absolute left-0 top-0 w-[52%] h-full z-[1]"
          style={{
            background: "#FFFFFF",
            borderRadius: "0% 58% 52% 0% / 0% 46% 54% 0%",
          }}
        />

        {/* Conteúdo esquerdo */}
        <div className="absolute left-0 top-0 w-[52%] h-full z-[2] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[560px]">
            <video
              className="w-[70%] h-auto max-h-[100vh] object-contain"
              src="/animacao_FazUno.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <img
              className="w-full max-w-[410px] h-auto object-contain block"
              src="/imagem_nome_fazuno.jpeg"
              alt="Brand name"
            />
          </div>
        </div>

        {/* Painel direito */}
        <div className="absolute left-[52%] top-0 w-[48%] h-full z-[3] flex items-center justify-center px-10">
          <div className="w-full max-w-[340px]">
            <h1 className="text-[2.2rem] font-bold text-[#E6E6E6] tracking-[-1px] mb-8 leading-none">
              Login
            </h1>

            {/* Campo email */}
            <div className="mb-4">
              <label className="block text-[0.78rem] font-medium text-[#DCDCDC] mb-[7px]">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="input-neon w-full px-4 py-[13px] bg-[rgba(230,230,230,0.08)] border rounded-[10px] text-[#E6E6E6] outline-none placeholder:text-[rgba(230,230,230,0.3)] transition-all duration-300"
                style={{ borderColor: "rgba(230,230,230,0.15)" }}
              />
              
            </div>

            {/* Campo senha */}
            <div className="mb-0">
              <label className="block text-[0.78rem] font-medium text-[#DCDCDC] mb-[7px]">
                Senha
              </label>
              <div className="relative">
                <input
                    type="password"
                    placeholder="••••••••"
                    className="input-neon w-full px-4 py-[13px] bg-[rgba(230,230,230,0.08)] border rounded-[10px] text-[#E6E6E6] outline-none placeholder:text-[rgba(230,230,230,0.3)] transition-all duration-300"
                    style={{ borderColor: "rgba(230,230,230,0.15)" }}
                />
                
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer opacity-40 hover:opacity-80"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Esqueceu senha */}
            <div className="flex justify-end mt-2 mb-[26px]">
              <a
                href="#"
                className="text-[0.78rem] transition-colors duration-200"
                style={{ color: "rgba(210, 204, 204, 0.96)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(210, 204, 204, 0.96)")
                }
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full py-[14px] bg-[#E6E6E6] text-[#0A0B2D] rounded-[10px] font-semibold hover:bg-[#DCDCDC] transition-all"
            >
              Entrar
            </button>

            {/* Cadastro */}
            <p className="text-center mt-[22px] text-[0.85rem] text-[rgba(230,230,230,0.4)]">
              Não tem conta?{" "}
              <a
                href="#"
                className="text-[#E6E6E6] font-medium border-b border-[rgba(230,230,230,0.3)]"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <div className="absolute bottom-[26px] right-10 text-[0.7rem] text-[rgba(230,230,230,0.25)] text-right z-[5]">
          <a href="#" className="text-[rgba(230,230,230,0.4)] hover:text-white">
            Termos de uso
          </a>
          {" · "}
          <a href="#" className="text-[rgba(230,230,230,0.4)] hover:text-white">
            Privacidade
          </a>
        </div>
      </div>
    </div>
  );
}
