# Screenshots

9 files, 12 placements (three are reused in two spots). The paths below already
exist — **overwrite in place**, no code change needed at the call sites.

Once the files are in, flip the switch in `src/components/Shot.jsx`:

```js
const SCREENSHOTS_READY = false;   // -> true
```

Until that is `true`, every frame renders the designed placeholder instead.

## Specs

| | |
|---|---|
| Format | `.jpg` — the paths are hardcoded with that extension |
| Aspect ratio | **exactly 738 : 1600** |
| Size | 738×1600 minimum, **1107×2400 preferred** |
| Content | app viewport only — **no browser chrome, no device bezel** |

The site draws its own 9px bezel and 25px inner radius around every shot, so a
screenshot that already includes a phone frame will end up double-framed.

The ratio is enforced with `object-fit: cover`: anything off-ratio is silently
cropped rather than letterboxed. 1107×2400 covers 3× displays on the largest
frame (the feature stage renders 282px wide).

## Before you capture

- **Shoot in demo mode.** The live database holds no content — a normal login
  renders empty shells. Demo mode is admin-gated and
  `rudrakshsinghtomar7@gmail.com` is the only admin account.
- **Hide the demo banner** ("Demo mode · placeholders mixed with real data").
  It is visible in the old `student-dashboard.jpg` and should not ship.
- **Use the same project throughout.** The showcase copy says *"The same
  project — LLM Hallucination Study — seen from each role"*, so both role sets
  must show `demo-proj-1`.
- **Be consistent about the status bar.** The old set was shot on a real device
  and includes the iOS status bar. `PhoneFrame` does not render one. Either
  include it in all 9 or none.

## The files

### Student

| File | Capture | Label | Appears |
|---|---|---|---|
| `student/student-pdf-viewer.jpg` | PDF reader, highlights + inline comments visible | PDF reader | **Hero** + showcase |
| `student/student-pdfs.jpg` | Project → PDFs tab, threaded comments visible | PDFs & comments | Feature stage + showcase |
| `student/student-dashboard.jpg` | Home as student — weekly summary, stat tiles | Dashboard | Showcase |
| `student/student-projects.jpg` | Projects list with progress + status | Projects | Showcase |

### Professor

| File | Capture | Label | Appears |
|---|---|---|---|
| `professor/prof-dashboard.jpg` | Home as professor — supervised projects, stat tiles | Dashboard | "For professors" + showcase |
| `professor/prof-review.jpg` | Submission review with grade + written feedback | Submission review | Showcase |
| `professor/prof-assignments.jpg` | Assignments with team distribution modes | Assignments | Showcase |
| `professor/prof-team.jpg` | Project team roster with roles | Team | Showcase |

### Shared

| File | Capture | Label | Appears |
|---|---|---|---|
| `feature/tasks.jpg` | Task list with statuses + assignees | Tasks | "For students" split |

## Sequencing

The app is mid-rollout onto the Study design system. Screens still on the older
look will clash with the Study-skinned site.

**Safe to capture now** — fully migrated, or no design-system surface:

- `student/student-dashboard.jpg`, `professor/prof-dashboard.jpg` — both Home
- `student/student-pdf-viewer.jpg`, `student/student-pdfs.jpg` — the PDF stack
  styles itself independently

Conveniently that covers the hero and the feature stage, the two most prominent
frames on the page.

**Wait for the rollout:**

| File | Blocking screen | Remaining |
|---|---|---|
| `feature/tasks.jpg` | `ProjectDetail/Tasks.jsx` | 16 old-class sites |
| `professor/prof-review.jpg` | `AssignmentDetailModal.jsx` | 13 |
| `professor/prof-assignments.jpg` | `ProjectDetail/Assignments.jsx` | 4 |
| `professor/prof-team.jpg` | `ProjectDetail/Team.jsx` | 3 |
| `student/student-projects.jpg` | `Projects.jsx` | partial — `ProjectItem` only |

`SCREENSHOTS_READY` is currently all-or-nothing, so a partial set still shows
placeholders everywhere. It can be made per-file if you want the safe four live
before the rest.
