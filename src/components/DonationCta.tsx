import { ShieldCheck } from 'lucide-react';

interface DonationCtaProps {
  donationUrl: string;
}

export default function DonationCta({ donationUrl }: DonationCtaProps) {
  return (
    <div className="w-full max-w-[420px] mx-auto text-center px-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <a
        href={donationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center w-full py-4 sm:py-5 px-8 text-xl sm:text-2xl font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-2xl shadow-[0_10px_35px_rgba(16,185,129,0.35)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ring-1 ring-emerald-400/50"
      >
        <span className="absolute -inset-0.5 rounded-2xl bg-emerald-500 opacity-30 blur-sm group-hover:opacity-60 transition duration-300 -z-10" />
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl sm:text-3xl">💕</span>
          <span className="tracking-wide uppercase font-black">AJUDAR AGORA</span>
        </div>
      </a>
      <div className="flex items-center justify-center gap-2 mt-3 text-xs text-zinc-400">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Ambiente seguro • Doação rápida via PIX</span>
      </div>
    </div>
  );
}
