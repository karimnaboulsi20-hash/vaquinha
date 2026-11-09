import { CircleCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { Testimonial } from '../data/testimonials';
import { getAvatarGradient, getInitials } from '../utils/donation';

interface TestimonialsListProps {
  testimonials: Testimonial[];
  donationUrl: string;
}

export default function TestimonialsList({ testimonials, donationUrl }: TestimonialsListProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="w-full max-w-[460px] mx-auto mt-10 px-2 sm:px-0 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{testimonials.length} doações confirmadas</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
          <HeartHandshake className="w-6 h-6 text-emerald-400" />
          <span>Quem já ajudou</span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
          Mensagens e doações reais de quem não virou as costas para esses 47 cãezinhos.
        </p>
      </div>

      <div className="space-y-3">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/90 shadow-md transition-all duration-200 hover:border-zinc-700/90"
          >
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${getAvatarGradient(
                    index
                  )} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}
                >
                  {getInitials(item.name)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-white text-sm">{item.name}</span>
                    <span title="Doador verificado">
                      <CircleCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </span>
                  </div>
                  {item.location && (
                    <span className="text-[11px] text-zinc-400 block leading-tight">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>

              {item.amount && (
                <div className="text-right shrink-0">
                  <span className="inline-block text-xs font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                    {item.amount}
                  </span>
                  {item.date && (
                    <span className="text-[10px] text-zinc-400 block mt-0.5">{item.date}</span>
                  )}
                </div>
              )}
            </div>

            <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed italic pl-1 border-l-2 border-emerald-500/40">
              "{item.comment}"
            </p>
          </div>
        ))}
      </div>

      {donationUrl && (
        <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center">
          <p className="text-xs text-zinc-400 mb-3">
            Faça como essas {testimonials.length} pessoas e ajude a salvar 47 cãezinhos agora:
          </p>
          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-4 px-6 text-lg font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-900/30 transition-all transform active:scale-95"
          >
            💕 AJUDAR AGORA
          </a>
        </div>
      )}
    </section>
  );
}
