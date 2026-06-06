// © 2026 Rudraksh Singh Tomar. All rights reserved.
// Student / Professor screenshot toggle. Same demo project (LLM Hallucination
// Study) shown from both sides of the desk — flip the segmented control and the
// four phone-framed shots crossfade. Both role sets stay mounted and eager-load
// up front, so the images decode once and every flip is an instant opacity swap
// (no remount, no re-fetch, no empty-frame flash). Pre-launch safe: images only.
import { useState } from 'react';
import Shot from './Shot.jsx';

const SETS = {
  student: [
    { src: 'student/student-dashboard.jpg',  cap: 'Dashboard',       alt: 'Acedex student dashboard — weekly summary and stat tiles' },
    { src: 'student/student-projects.jpg',   cap: 'Projects',        alt: 'Student projects list with progress and status' },
    { src: 'student/student-pdfs.jpg',       cap: 'PDFs & comments', alt: 'Project PDFs with threaded comments' },
    { src: 'student/student-pdf-viewer.jpg', cap: 'PDF reader',      alt: 'PDF reader with highlights and inline comments' },
  ],
  professor: [
    { src: 'professor/prof-dashboard.jpg',   cap: 'Dashboard',         alt: 'Acedex professor dashboard — supervised projects and stat tiles' },
    { src: 'professor/prof-review.jpg',      cap: 'Submission review', alt: 'Submission review with grade and written feedback' },
    { src: 'professor/prof-assignments.jpg', cap: 'Assignments',       alt: 'Assignments with team distribution modes' },
    { src: 'professor/prof-team.jpg',        cap: 'Team',              alt: 'Project team roster with roles' },
  ],
};

const TABS = [
  ['student', 'For students'],
  ['professor', 'For professors'],
];

export default function Showcase() {
  const [role, setRole] = useState('student');

  return (
    <section className="section showcase" id="showcase">
      <div className="shell-wide">
        <div className="lead-block reveal">
          <p className="kicker">See it in action</p>
          <h2 className="title">One workspace, both sides of the desk.</h2>
          <p className="body body--lead">
            The same project — <em>LLM Hallucination Study</em> — seen from each role.
            Flip between the student and professor views.
          </p>
        </div>

        <div className="seg reveal" role="tablist" aria-label="Choose a view">
          <span className="seg-pill" data-role={role} aria-hidden />
          {TABS.map(([key, text]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={role === key}
              className={`seg-tab${role === key ? ' on' : ''}`}
              onClick={() => setRole(key)}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Both sets are always mounted and stacked in the same grid cell; only
            opacity/visibility flips, so toggling is instant and never re-decodes. */}
        <div className="showcase-stages reveal">
          {TABS.map(([key]) => (
            <div
              key={key}
              className={`showcase-stage${role === key ? ' on' : ''}`}
              role="tabpanel"
              aria-hidden={role !== key}
            >
              {SETS[key].map((s) => (
                <figure className="showcase-item" key={s.src}>
                  <Shot phone eager src={s.src} alt={s.alt} label={s.cap} />
                  <figcaption className="showcase-cap">{s.cap}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
