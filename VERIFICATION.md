# Verification report

Checked on October 24, 2026, using Node.js 24.22.1 and npm 11.9.0.
The documented target and Docker build use Node.js 22.

| Check | Result |
| --- | --- |
| Dependency installation | Passed; lockfile included |
| All 13 component folders contain the five required files | Passed |
| Unit and interaction tests | 15 suites passed; 28 tests passed |
| CRA optimized production build | Passed; main JavaScript about 58.67 kB gzip |
| Static Storybook build | Passed |
| Default/Disabled story inventory | 26 stories, two for each required component |
| Production static files served on localhost:8083 | HTTP 200 using a temporary Python static server |
| Docker image/container execution | Not run: Docker is not installed in the verification environment |
| Browser interactions and responsive visual inspection | Not run: no browser executable was available and its download failed |
| GitHub push and LEARN submission | Not performed; student must upload and submit |

The static HTTP check does not verify Nginx, Docker, or browser rendering.
Storybook's build reports asset-size warnings for its documentation bundles;
the build completes successfully. These are separate from the small CRA app.

Use the README checklist to complete browser and Docker checks on your computer.
