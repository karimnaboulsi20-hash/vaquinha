import { CircleCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full text-center mb-5 sm:mb-6">
      <div className="w-full max-w-lg mx-auto bg-emerald-950/80 border-2 border-emerald-500 rounded-2xl p-4 sm:p-5 shadow-[0_10px_35px_rgba(16,185,129,0.25)] backdrop-blur-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 font-black text-xs sm:text-sm tracking-wide uppercase shadow-md mb-2.5">
          <CircleCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-950 stroke-[3]" />
          <span>Compra Aprovada</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight text-balance leading-tight mb-1.5">
          Sua compra já foi aprovada.
        </h1>
        <p className="text-emerald-200 font-bold text-sm sm:text-base leading-snug">
          Mas antes, para poder acessar a sua compra, veja esse vídeo.
        </p>
      </div>
    </header>
  );
}
