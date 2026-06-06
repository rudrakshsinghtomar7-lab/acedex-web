// © 2026 Rudraksh Singh Tomar. All rights reserved.
// Product-screenshot slot. Drop a real image into /public/screenshots/<src>
// and it shows automatically; until then a deliberately-styled placeholder
// frame renders (faux chrome + skeleton) so the page looks finished.
import { useState } from 'react';

// A transient image failure (e.g. a CDN blip in the propagation window right
// after a deploy) used to latch the placeholder for the whole session. Instead
// we retry a few times with backoff and a cache-busting suffix; only a file
// that's genuinely missing exhausts the retries and falls back to the skeleton.
const MAX_RETRIES = 3;

export default function Shot({ src, alt, label, phone = false, eager = false, className = '' }) {
  const [retry, setRetry] = useState(0);
  const [failed, setFailed] = useState(false);
  const base = src ? `${import.meta.env.BASE_URL}screenshots/${src}` : null;
  const url = base ? (retry > 0 ? `${base}?r=${retry}` : base) : null;
  const showImg = url && !failed;

  const onError = () => {
    if (retry < MAX_RETRIES) {
      const next = retry + 1;
      setTimeout(() => setRetry(next), 350 * next);
    } else {
      setFailed(true);
    }
  };

  if (showImg) {
    return (
      <figure className={`shot${phone ? ' shot--phone' : ''} ${className}`}>
        <img
          src={url}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          onError={onError}
        />
      </figure>
    );
  }

  return (
    <figure className={`shot shot--ph${phone ? ' shot--phone' : ''} ${className}`} aria-label={alt}>
      <div className="ph-chrome" aria-hidden>
        {phone ? (
          <span className="ph-notch" />
        ) : (
          <span className="ph-dots"><i /><i /><i /></span>
        )}
      </div>
      <div className="ph-body" aria-hidden>
        <span className="sk sk-title" />
        <span className="sk sk-line" />
        <span className="sk sk-line short" />
        <div className="ph-blocks">
          <span className="sk sk-block" />
          <span className="sk sk-block" />
        </div>
      </div>
      <figcaption className="ph-cap">{label || alt}</figcaption>
    </figure>
  );
}
