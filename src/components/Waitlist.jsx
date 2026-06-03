// © 2026 Rudraksh Singh Tomar. All rights reserved.
import { useState } from 'react';
import { supabase } from '../lib/supabase.js';

// Basic, forgiving email shape check (the DB also validates on INSERT).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Waitlist({ id, compact = false }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');     // '', 'professor', 'student'
  const [state, setState] = useState('idle'); // idle | loading | done | error
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!EMAIL_RE.test(clean)) {
      setError('Please enter a valid email address.');
      setState('error');
      return;
    }
    if (!supabase) {
      setError('Waitlist is not configured yet. Please email us instead.');
      setState('error');
      return;
    }
    setState('loading');
    setError(null);

    const { error: err } = await supabase
      .from('waitlist')
      .insert({ email: clean, role_interest: role || null });

    // 23505 = unique violation → already on the list. Treat as success so we
    // never reveal whether an address is already signed up.
    if (err && err.code !== '23505') {
      setError('Something went wrong. Please try again, or email us.');
      setState('error');
      return;
    }
    setState('done');
  }

  if (state === 'done') {
    return (
      <div className={`wl wl-done${compact ? ' wl-compact' : ''}`} role="status">
        <div className="wl-check" aria-hidden>✓</div>
        <div>
          <div className="wl-done-t">You're on the list.</div>
          <div className="wl-done-s">Thanks for your interest — we'll be in touch before we open the doors.</div>
        </div>
      </div>
    );
  }

  return (
    <form className={`wl${compact ? ' wl-compact' : ''}`} onSubmit={submit} noValidate>
      <div className="wl-row">
        <input
          id={id}
          className="wl-input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@university.edu"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle'); }}
          aria-label="Email address"
          required
        />
        <button className="wl-btn" type="submit" disabled={state === 'loading'}>
          {state === 'loading' ? <span className="wl-spin" aria-hidden /> : 'Join the waitlist'}
        </button>
      </div>

      <div className="wl-roles" role="radiogroup" aria-label="I am a (optional)">
        <span className="wl-roles-label">I'm a</span>
        {[['professor', 'Professor'], ['student', 'Student']].map(([val, label]) => (
          <button
            type="button"
            key={val}
            className={`wl-chip${role === val ? ' on' : ''}`}
            aria-pressed={role === val}
            onClick={() => setRole(r => (r === val ? '' : val))}
          >
            {label}
          </button>
        ))}
        <span className="wl-optional">optional</span>
      </div>

      {state === 'error' && <div className="wl-err" role="alert">{error}</div>}
      <p className="wl-fine">No spam. We'll only email you about early access. You can leave any time.</p>
    </form>
  );
}
