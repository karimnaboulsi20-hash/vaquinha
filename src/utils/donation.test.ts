import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getInitials,
  getAvatarGradient,
  shouldRevealOffer,
  calculateProgress,
  DEFAULT_DONATION_URL,
} from './donation';

test('getInitials extracts first and last initials for multi-word names', () => {
  assert.equal(getInitials('Ana Paula Silveira'), 'AS');
  assert.equal(getInitials('Marcos Vinicius'), 'MV');
  assert.equal(getInitials('Carlos Eduardo Nogueira'), 'CN');
});

test('getInitials extracts first 2 characters for single-word names', () => {
  assert.equal(getInitials('Rex'), 'RE');
  assert.equal(getInitials('Bob'), 'BO');
});

test('getAvatarGradient cycles deterministically through gradients', () => {
  const g0 = getAvatarGradient(0);
  const g1 = getAvatarGradient(1);
  const g6 = getAvatarGradient(6);
  assert.equal(g0, 'from-emerald-500 to-teal-700');
  assert.equal(g1, 'from-amber-500 to-orange-700');
  assert.equal(g6, g0); // Cycles
});

test('shouldRevealOffer returns true only when 20s or less remain', () => {
  // 60s total, at 30s -> 30s remaining -> false
  assert.equal(shouldRevealOffer(30, 60), false);
  // 60s total, at 40s -> 20s remaining -> true
  assert.equal(shouldRevealOffer(40, 60), true);
  // 60s total, at 55s -> 5s remaining -> true
  assert.equal(shouldRevealOffer(55, 60), true);
  // 0 duration -> false
  assert.equal(shouldRevealOffer(0, 0), false);
});

test('calculateProgress calculates 0% to 100% clamped progress', () => {
  assert.equal(calculateProgress(0, 100), 0);
  assert.equal(calculateProgress(50, 100), 50);
  assert.equal(calculateProgress(100, 100), 100);
  assert.equal(calculateProgress(150, 100), 100); // clamped
  assert.equal(calculateProgress(0, 0), 0);
});

test('DEFAULT_DONATION_URL has the expected target link', () => {
  assert.equal(DEFAULT_DONATION_URL, 'https://pay.sharkautomacoes.com/ee5ff7b2');
});
