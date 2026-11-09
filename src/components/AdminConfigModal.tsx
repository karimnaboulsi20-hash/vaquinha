import { useState, FormEvent } from 'react';
import {
  ExternalLink,
  Eye,
  Plus,
  RotateCcw,
  Save,
  Settings,
  Trash2,
  X,
} from 'lucide-react';
import { Testimonial } from '../data/testimonials';
import { DEFAULT_DONATION_URL } from '../utils/donation';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  donationUrl: string;
  onSaveDonationUrl: (url: string) => void;
  isRevealed: boolean;
  onToggleReveal: (forced?: boolean) => void;
  testimonials: Testimonial[];
  onSaveTestimonials: (list: Testimonial[]) => void;
}

export default function AdminConfigModal({
  isOpen,
  onClose,
  donationUrl,
  onSaveDonationUrl,
  isRevealed,
  onToggleReveal,
  testimonials,
  onSaveTestimonials,
}: AdminConfigModalProps) {
  const [urlInput, setUrlInput] = useState(donationUrl);
  const [showSavedNotification, setShowSavedNotification] = useState(false);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);

  // New testimonial form fields
  const [donorName, setDonorName] = useState('');
  const [donorLocation, setDonorLocation] = useState('');
  const [donorAmount, setDonorAmount] = useState('');
  const [donorComment, setDonorComment] = useState('');

  if (!isOpen) return null;

  const handleSaveUrl = (e: FormEvent) => {
    e.preventDefault();
    const finalUrl = urlInput.trim() || DEFAULT_DONATION_URL;
    onSaveDonationUrl(finalUrl);
    setShowSavedNotification(true);
    setTimeout(() => setShowSavedNotification(false), 2000);
  };

  const handleResetUrl = () => {
    setUrlInput(DEFAULT_DONATION_URL);
    onSaveDonationUrl(DEFAULT_DONATION_URL);
    setShowSavedNotification(true);
    setTimeout(() => setShowSavedNotification(false), 2000);
  };

  const handleCreateTestimonial = (e: FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorComment.trim()) return;

    const newTestimonial: Testimonial = {
      id: `real_${Date.now()}`,
      name: donorName.trim(),
      location: donorLocation.trim() || undefined,
      amount: donorAmount.trim() || undefined,
      comment: donorComment.trim(),
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    };

    onSaveTestimonials([...testimonials, newTestimonial]);
    setDonorName('');
    setDonorLocation('');
    setDonorAmount('');
    setDonorComment('');
    setIsAddingTestimonial(false);
  };

  const handleDeleteTestimonial = (id: string) => {
    onSaveTestimonials(testimonials.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-white">
            <Settings className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-lg">Painel de Configuração da Página</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-6">
          {/* Toggle reveal offer */}
          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Simulação do Botão</p>
              <p className="text-xs text-zinc-400">
                {isRevealed
                  ? 'O botão verde está visível atualmente.'
                  : 'O botão será exibido quando o vídeo terminar.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onToggleReveal(!isRevealed)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isRevealed
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isRevealed ? 'Ocultar botão' : 'Revelar agora'}</span>
            </button>
          </div>

          {/* Donation URL management */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Link de Destino do Botão "Doe agora"
            </label>
            <form onSubmit={handleSaveUrl} className="space-y-2">
              <div className="relative">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={handleResetUrl}
                  className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restaurar link padrão</span>
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href={urlInput}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Testar</span>
                  </a>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 transition-colors"
                  >
                    <Save className="w-3 h-3" />
                    <span>Salvar</span>
                  </button>
                </div>
              </div>

              {showSavedNotification && (
                <p className="text-xs text-emerald-400 mt-1">Link salvo com sucesso!</p>
              )}
            </form>
          </div>

          {/* Testimonials Manager */}
          <div className="pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="text-sm font-semibold text-white">Seção "Quem já ajudou"</h4>
                <p className="text-xs text-zinc-400">
                  {testimonials.length === 0
                    ? 'Atualmente oculta (nenhum relato adicionado).'
                    : `${testimonials.length} depoimento(s) cadastrado(s).`}
                </p>
              </div>
              {!isAddingTestimonial && (
                <button
                  type="button"
                  onClick={() => setIsAddingTestimonial(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar depoimento real</span>
                </button>
              )}
            </div>

            {testimonials.length > 0 && (
              <div className="space-y-2 mt-3 max-h-48 overflow-y-auto pr-1">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800 flex items-start justify-between gap-2"
                  >
                    <div className="text-xs">
                      <p className="font-semibold text-white">
                        {t.name}{' '}
                        {t.amount && (
                          <span className="text-emerald-400 font-normal">({t.amount})</span>
                        )}
                      </p>
                      <p className="text-zinc-400 italic line-clamp-2 mt-0.5">"{t.comment}"</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteTestimonial(t.id)}
                      className="p-1 text-zinc-500 hover:text-rose-400 transition-colors"
                      title="Excluir relato"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {isAddingTestimonial && (
              <form
                onSubmit={handleCreateTestimonial}
                className="mt-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-700/80 space-y-3"
              >
                <p className="text-xs font-semibold text-emerald-400">
                  Cadastrar Relato Real de Doador
                </p>
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">Nome do Doador *</label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Ex: Maria Clara"
                    required
                    className="w-full px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-1">
                      Cidade / Estado (opcional)
                    </label>
                    <input
                      type="text"
                      value={donorLocation}
                      onChange={(e) => setDonorLocation(e.target.value)}
                      placeholder="Ex: São Paulo - SP"
                      className="w-full px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-1">
                      Valor Doado (opcional)
                    </label>
                    <input
                      type="text"
                      value={donorAmount}
                      onChange={(e) => setDonorAmount(e.target.value)}
                      placeholder="Ex: R$ 50,00"
                      className="w-full px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1">
                    Mensagem / Depoimento do Doador *
                  </label>
                  <textarea
                    value={donorComment}
                    onChange={(e) => setDonorComment(e.target.value)}
                    placeholder="O que o doador relatou sobre a ajuda aos cãezinhos..."
                    rows={3}
                    required
                    className="w-full px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsAddingTestimonial(false)}
                    className="px-3 py-1 rounded-lg text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  >
                    Salvar Relato
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
