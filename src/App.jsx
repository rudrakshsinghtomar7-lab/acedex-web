// © 2026 Rudraksh Singh Tomar. All rights reserved.
import { useTheme } from './lib/useTheme.js';
import { useReveal } from './lib/useReveal.js';
import Waitlist from './components/Waitlist.jsx';
import Shot from './components/Shot.jsx';
import Showcase from './components/Showcase.jsx';

// Draft legal pages live in the app (public routes). Update to acedex.com.au
// paths once the apex domain is live.
const PRIVACY_URL = 'https://rudrakshsinghtomar7-lab.github.io/Acedex/legal/privacy';
const TERMS_URL   = 'https://rudrakshsinghtomar7-lab.github.io/Acedex/legal/terms';
const CONTACT     = 'rudrakshsinghtomar7@gmail.com';
const LOGO        = `${import.meta.env.BASE_URL}logo.png`;

function Logo({ size = 30 }) {
  return (
    <a className="brand" href="#top" aria-label="Acedex home">
      <img className="brand-mark" src={LOGO} alt="" width={size} height={size} />
      <span className="brand-name">Acedex</span>
    </a>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? '☾' : '☀'}
    </button>
  );
}

// Comparison-table marks. Indigo only on the Acedex column; everything else neutral.
const Mark = ({ kind, note }) => (
  <span className={`mk mk--${kind}`}>
    <span className="mk-i" aria-label={kind === 'yes' ? 'Yes' : kind === 'no' ? 'No' : 'Partial'}>
      {kind === 'yes' ? '✓' : kind === 'no' ? '–' : '◐'}
    </span>
    {note && <em>{note}</em>}
  </span>
);

// An editorial numbered point (replaces generic card grids).
const Point = ({ n, title, children }) => (
  <div className="point reveal">
    <span className="point-n">{n}</span>
    <div>
      <h3 className="point-t">{title}</h3>
      <p className="point-p">{children}</p>
    </div>
  </div>
);

export default function App() {
  useReveal();

  return (
    <div id="top">
      {/* ── Nav ───────────────────────────────────────────────── */}
      <header className="nav">
        <div className="nav-inner">
          <Logo />
          <div className="nav-right">
            <span className="nav-badge">Pre-launch</span>
            <ThemeToggle />
            <a className="btn-ghost nav-cta" href="#waitlist">Join the waitlist</a>
          </div>
        </div>
      </header>

      <main>
        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span className="dot" />Built by a student · for universities</p>
              <h1 className="display">
                Built by a student — for professors and students alike.
              </h1>
              <p className="lede">
                Acedex puts collaboration and academic integrity in one calm workspace —
                so professors stop chasing, and students get fair credit for the work they actually do.
              </p>
              <div className="hero-cta">
                <Waitlist id="wl-hero" compact />
              </div>
              <p className="hero-note">
                We're pre-launch and finishing a legal review, so we're not opening accounts yet.
                Join the waitlist and you'll be first to know.
              </p>
            </div>

            <div className="hero-visual reveal">
              <Shot phone eager src="student/student-pdf-viewer.jpg" label="PDF reader" alt="Acedex PDF reader with highlights and inline comments" />
            </div>
          </div>
        </section>

        {/* ── 2. The core idea — centered statement + phone centerpiece ── */}
        <section className="section feature">
          <div className="shell">
            <div className="lead-block reveal">
              <p className="kicker">The whole point</p>
              <h2 className="title title--xl">
                Collaboration and integrity,<br />finally in one place.
              </h2>
            </div>
            <div className="feature-stage reveal">
              <Shot phone src="student/student-pdfs.jpg" label="PDFs & comments" alt="Project PDFs with reviewer comments" />
            </div>
            <div className="feature-prose reveal">
              <p className="body">
                Today coursework is split across tools that don't talk to each other.
                Turnitin checks integrity but knows nothing about how the work got done.
                Google Classroom handles the workflow but has no real view of originality, or
                of who contributed what.
              </p>
              <p className="body">
                Acedex does both. The project, the tasks, the submissions, the contribution
                trail and the AI-assisted integrity review all live in the same workspace —
                so the picture is whole, not stitched together after the fact.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. For professors — text left / visual right ───────── */}
        <section className="section">
          <div className="shell split">
            <div className="split-copy">
              <div className="reveal">
                <p className="kicker">For professors</p>
                <h2 className="title">Less chasing. A clearer view.</h2>
                <p className="body body--lead">
                  Acedex gives you the one thing every other tool leaves you guessing about:
                  an honest, live picture of where the work actually stands.
                </p>
              </div>
              <div className="points stagger">
                <Point n="01" title="Live status dashboard">
                  See every team's progress at a glance — what's done, in progress, or stuck —
                  without emailing anyone to ask.
                </Point>
                <Point n="02" title="Contribution visibility">
                  See who actually did what across a group project, so grades can reflect real
                  effort instead of guesswork.
                </Point>
                <Point n="03" title="AI-assisted integrity review">
                  An AI pass surfaces things worth a closer look on a submission — to support
                  your judgement, never to replace it.
                </Point>
              </div>
            </div>
            <div className="split-visual reveal">
              <Shot phone src="professor/prof-dashboard.jpg" label="Dashboard" alt="Professor dashboard — supervised projects and status" />
            </div>
          </div>
        </section>

        {/* ── 4. For students — visual left / text right (mirror) ── */}
        <section className="section section--tint">
          <div className="shell split split--rev">
            <div className="split-copy">
              <div className="reveal">
                <p className="kicker">For students</p>
                <h2 className="title">Clear tasks. Fair credit.</h2>
                <p className="body body--lead">
                  Acedex is built to be fair to <em>you</em> too. It isn't surveillance — it's a
                  record that makes sure the work you put in is the work you're credited for.
                </p>
              </div>
              <div className="points stagger">
                <Point n="01" title="Know exactly what's due">
                  Your tasks, deadlines and feedback in one place — no more digging through email
                  threads and three different apps.
                </Point>
                <Point n="02" title="Fair contribution credit">
                  When you carry your share of a group project, there's a clear record of it. No
                  more effort disappearing into a single shared grade.
                </Point>
                <Point n="03" title="One clean workspace">
                  Read, annotate, submit and get feedback in the same calm space — designed to get
                  out of your way.
                </Point>
              </div>
            </div>
            <div className="split-visual reveal">
              <Shot phone src="feature/tasks.jpg" label="Tasks" alt="Task list with statuses and assignees" />
            </div>
          </div>
        </section>

        {/* ── 4b. Interactive — student / professor screenshot toggle ── */}
        <Showcase />

        {/* ── 5. Differentiator — editorial comparison table ─────── */}
        <section className="section">
          <div className="shell">
            <div className="lead-block reveal">
              <p className="kicker">How it's different</p>
              <h2 className="title">The tools you use today each do half the job.</h2>
              <p className="body body--lead">Acedex is the one place where integrity and collaboration meet.</p>
            </div>

            <div className="cmp reveal" role="table" aria-label="Comparison of Turnitin, Google Classroom and Acedex">
              <div className="cmp-head" role="row">
                <span role="columnheader">&nbsp;</span>
                <span role="columnheader">Turnitin</span>
                <span role="columnheader">Classroom</span>
                <span role="columnheader" className="cmp-us">Acedex</span>
              </div>
              {[
                ['Academic integrity check', <Mark key="t" kind="yes" />, <Mark key="g" kind="no" />, <Mark key="a" kind="yes" />],
                ['Collaboration & workflow', <Mark key="t" kind="no" />, <Mark key="g" kind="yes" />, <Mark key="a" kind="yes" />],
                ['Contribution tracking', <Mark key="t" kind="no" />, <Mark key="g" kind="no" />, <Mark key="a" kind="yes" />],
                ['AI review', <Mark key="t" kind="mid" note="detection only" />, <Mark key="g" kind="no" />, <Mark key="a" kind="yes" note="assists judgement" />],
                ['All in one place', <Mark key="t" kind="no" />, <Mark key="g" kind="no" />, <Mark key="a" kind="yes" />],
              ].map(([label, t, g, a]) => (
                <div className="cmp-row" role="row" key={label}>
                  <span className="cmp-label" role="rowheader">{label}</span>
                  <span role="cell">{t}</span>
                  <span role="cell">{g}</span>
                  <span role="cell" className="cmp-us">{a}</span>
                </div>
              ))}
            </div>
            <p className="cmp-foot reveal">
              Comparison reflects each product's primary, generally-available purpose, not an exhaustive feature audit.
            </p>
          </div>
        </section>

        {/* ── 6. Founder's note — narrow, editorial ──────────────── */}
        <section className="section">
          <div className="shell founder reveal">
            <p className="kicker">Why a student built this</p>
            <p className="founder-lead">
              I got tired of juggling four tools to hand in one assignment.
            </p>
            <p className="body">
              I'm a student. Every group project meant the same scramble: Turnitin for the integrity
              check, Google Classroom for the hand-in, email for the back-and-forth, and a group chat
              for chasing teammates who'd gone quiet. Four tools, none of them aware of each other —
              and somehow the person who did the most work was the hardest thing to prove.
            </p>
            <p className="body">
              I wanted one app for the whole thing, where the work, the workflow, the contribution
              trail and the integrity check all lived together. I couldn't find it, so I started
              building it. I've lived this problem from the student side, and I'm building Acedex to be
              something professors and institutions can genuinely rely on — carefully, and out in the open.
            </p>
            <p className="founder-sign">— Rudraksh Singh Tomar, founder</p>
          </div>
        </section>

        {/* ── 7. Trust band ──────────────────────────────────────── */}
        <section className="section section--tint">
          <div className="shell trust reveal">
            <p className="kicker">Honest about what it is</p>
            <div className="trust-grid">
              <div className="trust-item">
                <h3>AI assists — it doesn't pass verdict</h3>
                <p>
                  Acedex's AI review highlights things that may be worth a closer look. It is a tool
                  to support a human's judgement, not an infallible decision. The professor always decides.
                </p>
              </div>
              <div className="trust-item">
                <h3>Your data, handled responsibly</h3>
                <p>
                  Access is restricted, files are served over signed, time-limited links, and we're
                  honest about the third parties involved. Read the details before you ever sign up.
                </p>
              </div>
            </div>
            <div className="trust-links">
              <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy Policy ↗</a>
              <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">Terms of Service ↗</a>
              <span className="trust-draft">drafts — pending legal review</span>
            </div>
          </div>
        </section>

        {/* ── 8. Final CTA ───────────────────────────────────────── */}
        <section className="cta" id="waitlist">
          <div className="shell cta-inner reveal">
            <h2 className="title title--xl">Be first in when we open the doors.</h2>
            <p className="body body--lead cta-sub">
              We're finishing a legal review before we let anyone in. Leave your email and you'll be
              among the first to get access.
            </p>
            <div className="cta-form">
              <Waitlist id="wl-foot" />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="foot">
        <div className="shell foot-inner">
          <div className="foot-brand">
            <Logo />
            <p className="foot-tag">Collaboration and academic integrity, in one place.</p>
          </div>
          <nav className="foot-links" aria-label="Footer">
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
          </nav>
        </div>
        <div className="shell foot-fine">
          © 2026 Rudraksh Singh Tomar. Acedex is pre-launch. The legal pages are drafts pending review.
        </div>
      </footer>
    </div>
  );
}
