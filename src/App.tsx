import { useState, useEffect } from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import DonationCta from './components/DonationCta';
import TestimonialsList from './components/TestimonialsList';
import AdminConfigModal from './components/AdminConfigModal';
import {
  getStoredDonationUrl,
  setStoredDonationUrl,
  getStoredTestimonials,
  setStoredTestimonials,
} from './utils/donation';

export default function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [donationUrl, setDonationUrl] = useState(getStoredDonationUrl);
  const [testimonials, setTestimonials] = useState(getStoredTestimonials);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get('revealed') === 'true' ||
        params.get('reveal') === '1' ||
        params.get('autostart') === '1'
      ) {
        setIsRevealed(true);
      }
      if (params.get('config') === 'true' || params.get('admin') === '1') {
        setIsAdminOpen(true);
      }
    } catch {
      // Ignore URLSearchParams error in SSR or restricted environments
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        setIsAdminOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSaveDonationUrl = (newUrl: string) => {
    setDonationUrl(newUrl);
    setStoredDonationUrl(newUrl);
  };

  const handleSaveTestimonials = (newList: typeof testimonials) => {
    setTestimonials(newList);
    setStoredTestimonials(newList);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between selection:bg-emerald-500/25 selection:text-emerald-200">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-950/15 rounded-full blur-[120px]" />
      </div>

      <main className="w-full max-w-xl mx-auto px-4 pt-5 pb-12 flex-1 flex flex-col items-center">
        <Header />

        <section className="w-full flex justify-center mb-6" aria-label="Vídeo de apresentação">
          <VideoPlayer onReveal={() => setIsRevealed(true)} isRevealed={isRevealed} />
        </section>

        {isRevealed && (
          <div className="w-full flex flex-col items-center mt-2">
            <DonationCta donationUrl={donationUrl} />
            <TestimonialsList testimonials={testimonials} donationUrl={donationUrl} />
          </div>
        )}
      </main>

      <AdminConfigModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        donationUrl={donationUrl}
        onSaveDonationUrl={handleSaveDonationUrl}
        isRevealed={isRevealed}
        onToggleReveal={(forced) => setIsRevealed(forced === undefined ? !isRevealed : forced)}
        testimonials={testimonials}
        onSaveTestimonials={handleSaveTestimonials}
      />
    </div>
  );
}
