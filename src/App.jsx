// © 2026 Rudraksh Singh Tomar. All rights reserved.
import { useTheme } from './lib/useTheme.js';
import { useReveal } from './lib/useReveal.js';
import Waitlist from './components/Waitlist.jsx';
import Shot from './components/Shot.jsx';

// Draft legal pages live in the app (public routes). Update to acedex.com.au
// paths once the apex domain is live.
const PRIVACY_URL = 'https://rudrakshsinghtomar7-lab.github.io/Acedex/legal/privacy';
const TERMS_URL   = 'https://rudrakshsinghtomar7-lab.github.io/Acedex/legal/terms';
const CONTACT     = 'rudrakshsinghtomar7@gmail.com';

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Acedex home">
      <span className="brand-mark" aria-hidden>A</span>
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

// Comparison-table cells.
const Yes = ({ note }) => <span className="cmp-cell yes"><span className="cmp-i" aria-label="Yes">✓</span>{note && <em>{note}</em>}</span>;
const No  = ({ note }) => <span className="cmp-cell no"><span className="cmp-i" aria-label="No">—</span>{note && <em>{note}</em>}</span>;
const Mid = ({ note }) => <span className="cmp-cell mid"><span className="cmp-i" aria-label="Partial">◐</span>{note && <em>{note}</em>}</span>;

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
            <a className="btn btn-p nav-cta" href="#waitlist">Join the waitlist</a>
          </div>
        </div>
      </header>

      <main>
        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-glow" aria-hidden />
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">Built by a student · for universities</div>
              <h1 className="h1">
                Built by a student —<br />for professors and students alike.
              </h1>
              <p className="lede">
                Acedex puts collaboration and academic integrity in one calm workspace —
                so professors stop chasing and students get fair credit for the work they actually do.
              </p>
              <div className="hero-cta">
                <Waitlist id="wl-hero" compact />
              </div>
              <p className="hero-note">
                We're pre-launch and finishing a legal review, so we're not opening accounts yet.
                Join the waitlist and you'll be first to know.
              </p>
            </div>

            <div className="hero-shot reveal">
              <Shot phone src="hero-home.png" label="App home" alt="Acedex home screen showing projects and status" />
            </div>
          </div>
        </section>

        {/* ── 2. The main feature ─────────────────────────────── */}
        <section className="band">
          <div className="wrap feature-grid">
            <div className="feature-copy reveal">
              <div className="kicker">The whole point</div>
              <h2 className="h2">Collaboration and integrity, finally in one place.</h2>
              <p className="p">
                Today coursework is split across tools that don't talk to each other.
                Turnitin checks integrity but knows nothing about how the work got done.
                Google Classroom handles the workflow but has no real view of originality or
                who contributed what. So the work happens in one place and the checking happens
                in another — and the gaps in between are where things go wrong.
              </p>
              <p className="p">
                Acedex does both. The project, the tasks, the submissions, the contribution
                trail and the AI-assisted integrity review all live in the same workspace —
                so the picture is whole, not stitched together after the fact.
              </p>
              <ul className="bullets">
                <li><strong>One workspace</strong> — projects, tasks, files and feedback together.</li>
                <li><strong>Integrity in context</strong> — review the work alongside how it was produced.</li>
                <li><strong>Nothing falls through the cracks</strong> between the tools you used to need.</li>
              </ul>
            </div>
            <div className="feature-shot reveal">
              <Shot src="feature-workspace.png" label="Project workspace" alt="Acedex project workspace with tasks, files and review in one view" />
            </div>
          </div>
        </section>

        {/* ── 3. For professors ───────────────────────────────── */}
        <section className="band alt">
          <div className="wrap">
            <div className="aud-head reveal">
              <div className="kicker">For professors</div>
              <h2 className="h2">Less chasing. A clearer view. Better-spent time.</h2>
              <p className="p p-wide">
                Acedex gives you the one thing every other tool leaves you guessing about:
                an honest, live picture of where the work actually stands.
              </p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="card-ic" aria-hidden>◑</div>
                <h3>Live status dashboard</h3>
                <p>See every team's progress at a glance — what's done, in progress, or stuck — without emailing anyone to ask.</p>
              </article>
              <article className="card reveal">
                <div className="card-ic" aria-hidden>◇</div>
                <h3>Contribution visibility</h3>
                <p>See who actually did what across a group project, so grades can reflect real effort instead of guesswork.</p>
              </article>
              <article className="card reveal">
                <div className="card-ic" aria-hidden>✦</div>
                <h3>AI-assisted integrity review</h3>
                <p>An AI pass surfaces things worth a closer look on a submission — to support your judgement, never to replace it.</p>
              </article>
            </div>
            <div className="aud-shot reveal">
              <Shot src="prof-dashboard.png" label="Professor dashboard" alt="Professor status dashboard across teams" />
            </div>
          </div>
        </section>

        {/* ── 4. For students ─────────────────────────────────── */}
        <section className="band">
          <div className="wrap">
            <div className="aud-head reveal">
              <div className="kicker">For students</div>
              <h2 className="h2">Clear tasks, fair credit, one tidy place.</h2>
              <p className="p p-wide">
                Acedex is built to be fair to <em>you</em> too. It's not surveillance —
                it's a record that makes sure the work you put in is the work you're credited for.
              </p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="card-ic" aria-hidden>☑</div>
                <h3>Know exactly what's due</h3>
                <p>Your tasks, deadlines and feedback in one workspace — no more digging through email threads and three different apps.</p>
              </article>
              <article className="card reveal">
                <div className="card-ic" aria-hidden>⚖</div>
                <h3>Fair contribution credit</h3>
                <p>When you carry your share of a group project, there's a clear record of it. No more effort disappearing into a single shared grade.</p>
              </article>
              <article className="card reveal">
                <div className="card-ic" aria-hidden>◳</div>
                <h3>One clean workspace</h3>
                <p>Read, annotate, submit and get feedback in the same calm space — designed to get out of your way.</p>
              </article>
            </div>
            <div className="aud-shot reveal">
              <Shot phone src="student-tasks.png" label="Student tasks" alt="Student task list and workspace" />
            </div>
          </div>
        </section>

        {/* ── 5. Differentiator ───────────────────────────────── */}
        <section className="band alt">
          <div className="wrap">
            <div className="aud-head reveal">
              <div className="kicker">How it's different</div>
              <h2 className="h2">The tools you use today each do half the job.</h2>
              <p className="p p-wide">Acedex is the one place where integrity and collaboration meet.</p>
            </div>

            <div className="cmp reveal" role="table" aria-label="Comparison of Turnitin, Google Classroom and Acedex">
              <div className="cmp-head" role="row">
                <span role="columnheader">&nbsp;</span>
                <span role="columnheader">Turnitin</span>
                <span role="columnheader">Google Classroom</span>
                <span role="columnheader" className="cmp-us">Acedex</span>
              </div>
              {[
                ['Academic integrity check', <Yes key="t" />, <No key="g" />, <Yes key="a" />],
                ['Collaboration & workflow', <No key="t" />, <Yes key="g" />, <Yes key="a" />],
                ['Contribution tracking', <No key="t" />, <No key="g" />, <Yes key="a" />],
                ['AI review', <Mid key="t" note="detection only" />, <No key="g" />, <Yes key="a" note="assists your judgement" />],
                ['All in one place', <No key="t" />, <No key="g" />, <Yes key="a" />],
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

        {/* ── 6. Founder's note ───────────────────────────────── */}
        <section className="band">
          <div className="wrap founder reveal">
            <div className="kicker">Why a student built this</div>
            <h2 className="h2">I got tired of juggling four tools to hand in one assignment.</h2>
            <div className="founder-body">
              <p className="p">
                I'm a student. Every group project meant the same scramble: Turnitin for the integrity check,
                Google Classroom for the hand-in, email for the back-and-forth, and a group chat for chasing
                teammates who'd gone quiet. Four tools, none of them aware of each other, and somehow the
                person who did the most work was the hardest thing to prove.
              </p>
              <p className="p">
                I wanted one app for the whole thing — where the work, the workflow, the contribution trail and
                the integrity check all lived together. I couldn't find it, so I started building it. I've lived
                this problem from the student side, and I'm building Acedex to be something professors and
                institutions can genuinely rely on — carefully, and out in the open.
              </p>
              <p className="founder-sign">— Rudraksh Singh Tomar, founder</p>
            </div>
          </div>
        </section>

        {/* ── 7. Trust band ───────────────────────────────────── */}
        <section className="band alt">
          <div className="wrap trust reveal">
            <div className="kicker">Honest about what it is</div>
            <div className="trust-grid">
              <div className="trust-item">
                <h3>AI assists — it doesn't pass verdict</h3>
                <p>
                  Acedex's AI review highlights things that may be worth a closer look. It is a tool to
                  support a human's judgement, not an infallible decision. The professor always decides.
                </p>
              </div>
              <div className="trust-item">
                <h3>Your data, handled responsibly</h3>
                <p>
                  Access is restricted, files are served over signed time-limited links, and we're honest
                  about the third parties involved. Read the details before you ever sign up.
                </p>
              </div>
            </div>
            <div className="trust-links">
              <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy Policy ↗</a>
              <span aria-hidden>·</span>
              <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">Terms of Service ↗</a>
              <span className="trust-draft">drafts — pending legal review</span>
            </div>
          </div>
        </section>

        {/* ── 8. Final CTA ────────────────────────────────────── */}
        <section className="cta" id="waitlist">
          <div className="cta-glow" aria-hidden />
          <div className="wrap cta-inner reveal">
            <h2 className="h2">Be first in when we open the doors.</h2>
            <p className="p p-wide">
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
        <div className="wrap foot-inner">
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
        <div className="wrap foot-fine">
          © 2026 Rudraksh Singh Tomar. Acedex is pre-launch. The legal pages are drafts pending review.
        </div>
      </footer>
    </div>
  );
}
