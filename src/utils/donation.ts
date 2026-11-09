import { DEFAULT_TESTIMONIALS, Testimonial } from '../data/testimonials';

export const DEFAULT_DONATION_URL = 'https://pay.sharkautomacoes.com/ee5ff7b2';
export const DONATION_URL_STORAGE_KEY = 'ajuda_caes_donation_url_v1';
export const TESTIMONIALS_STORAGE_KEY = 'ajuda_caes_testimonials_v2';

export const AVATAR_GRADIENTS = [
  'from-emerald-500 to-teal-700',
  'from-amber-500 to-orange-700',
  'from-sky-500 to-blue-700',
  'from-rose-500 to-pink-700',
  'from-violet-500 to-purple-700',
  'from-emerald-600 to-green-800',
] as const;

export function getAvatarGradient(index: number): string {
  return AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    const first = parts[0][0] || '';
    const last = parts[parts.length - 1][0] || '';
    return `${first}${last}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function shouldRevealOffer(currentTime: number, duration: number): boolean {
  if (!duration || duration <= 0) return false;
  const remaining = duration - currentTime;
  return remaining <= 20;
}

export function calculateProgress(currentTime: number, duration: number): number {
  if (!duration || duration <= 0) return 0;
  return Math.min(100, Math.max(0, (currentTime / duration) * 100));
}

export function getStoredDonationUrl(): string {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem(DONATION_URL_STORAGE_KEY);
      if (stored && stored.trim().length > 0) {
        return stored.trim();
      }
    }
  } catch (err) {
    console.warn('LocalStorage error reading donation URL:', err);
  }
  return DEFAULT_DONATION_URL;
}

export function setStoredDonationUrl(url: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(DONATION_URL_STORAGE_KEY, url.trim());
    }
  } catch (err) {
    console.warn('LocalStorage error saving donation URL:', err);
  }
}

export function getStoredTestimonials(): Testimonial[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch (err) {
    console.warn('LocalStorage error reading testimonials:', err);
  }
  return DEFAULT_TESTIMONIALS;
}

export function setStoredTestimonials(testimonials: Testimonial[]): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(testimonials));
    }
  } catch (err) {
    console.warn('LocalStorage error saving testimonials:', err);
  }
}
