// © 2026 Rudraksh Singh Tomar. All rights reserved.
// Product-screenshot slot. Drop a real image into /public/screenshots/<src>
// and it shows automatically; until then a labelled placeholder renders so the
// layout is final and you can see exactly where each shot goes.
import { useState } from 'react';

export default function Shot({ src, alt, label, phone = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  const url = src ? `${import.meta.env.BASE_URL}screenshots/${src}` : null;
  const showImg = url && !failed;

  return (
    <div className={`shot${phone ? ' shot-phone' : ''} ${className}`}>
      {showImg ? (
        <img src={url} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="shot-ph" aria-label={alt}>
          <div className="shot-ph-icon" aria-hidden>▦</div>
          <div className="shot-ph-label">{label || alt}</div>
          <div className="shot-ph-hint">screenshot placeholder</div>
        </div>
      )}
    </div>
  );
}
