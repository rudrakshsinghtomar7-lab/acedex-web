// © 2026 Rudraksh Singh Tomar. All rights reserved.
// Product-screenshot slot. Drop a real image into /public/screenshots/<src>
// and it shows automatically; until then a deliberately-styled placeholder
// frame renders (faux chrome + skeleton) so the page looks finished.
import { useState } from 'react';

export default function Shot({ src, alt, label, phone = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  const url = src ? `${import.meta.env.BASE_URL}screenshots/${src}` : null;
  const showImg = url && !failed;

  if (showImg) {
    return (
      <figure className={`shot${phone ? ' shot--phone' : ''} ${className}`}>
        <img src={url} alt={alt} loading="lazy" onError={() => setFailed(true)} />
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
