# UI Garden — Assignment 12

**Student:** Parneet Kaur  
**Project:** React and TypeScript component library with Storybook

UI Garden contains 13 reusable components and a responsive demonstration page.
The application uses the Create React App toolchain (`react-scripts`), not Vite.
Storybook runs separately to document the same components used by the application.
Versions are pinned for compatibility with this assignment's CRA requirement.

## 1. Requirements and project setup

Install Node.js 22 LTS and npm, Git, and Docker Desktop (start Docker Desktop
before Docker commands). Internet access is required to download npm packages
and Docker base images. Extract the ZIP and open a terminal in
`Kaur_Parneet_ui_garden` — the folder containing `package.json`.

```sh
node --version
npm --version
npm ci
```

`npm ci` installs the exact dependency tree recorded in `package-lock.json`.
Do not copy `node_modules` between computers. This project already contains the
CRA application scaffold; do not run Create React App inside it again.
For a separate new CRA project the scaffold command is
`npx create-react-app@5.0.1 my-library --template typescript`.

## 2. Run the React app locally

```sh
npm start
```

Open http://localhost:3000. The app has a seed counter, dropdown, radio choices,
a disabled-state preview, images, cards, and a table. The preview toggle remains
enabled so the components can be switched back to their default state.
Stop a development server with Ctrl+C.

The required submission/deployment URL is http://localhost:8083; the Docker
instructions below serve the **production CRA build** there.

## 3. Run Storybook

```sh
npm run storybook
```

Open http://localhost:6006. Expand **UI Garden**, choose any component, and inspect
its **Default** and **Disabled** stories. In Controls, change `backgroundColor`,
`disabled`, and the text property (`children`, `text`, `label`, `title`, or `alt`,
depending on the component). Dropdown options can be edited as an array.
`backgroundColor` changes the component itself; the toolbar background changes
the surrounding canvas. Disabled backgrounds always override custom colours.
Use the viewport toolbar to check mobile, tablet, and desktop sizes.

To produce deployable static Storybook documentation:

```sh
npm run build-storybook
```

Output: `storybook-static/`. This is separate from the CRA production site.
The Docker image intentionally serves the CRA application, as the assignment
requires, rather than replacing it with the Storybook build.

## 4. Run component tests

```sh
npm run test:ci
```

For watch mode during development:

```sh
npm test
```

Each required component has a `Component.tests.tsx` file with two tests:

1. The default component is visible.
2. Rerendering with `disabled` changes the background from white to `#d1d5db`
   and changes the cursor to `not-allowed`.

Jest, React Testing Library, jest-dom, and jest-styled-components are used.
The Jest `testMatch` setting explicitly discovers the required plural
`.tests.tsx` filenames (CRA's normal pattern uses singular `.test.tsx`).
Extra interaction tests cover button clicks and dropdown selection.
Tests for table parts use valid enclosing table markup; image and radio tests
check their styled wrappers, where the disabled background is painted.

## 5. Build the optimized application

```sh
npm run build
```

CRA creates minified production assets in `build/`. TypeScript is checked during
this build. The Dockerfile runs this command inside its Node build stage.
The final Nginx stage contains the built static files, not the development server.

## 6. Docker build and deployment on localhost:8083

Run from the folder containing the Dockerfile:

```sh
docker build -t kaur-parneet-assignment12 .
docker run -d --name Kaur_Parneet_coding_assignment12 -p 8083:8083 kaur-parneet-assignment12
```

Open **http://localhost:8083** or **http://127.0.0.1:8083**.

- Container name: `Kaur_Parneet_coding_assignment12`
- Working directory in both Docker stages: `/Kaur_Parneet_ui_garden`
- Production site files: `/Kaur_Parneet_ui_garden`
- Nginx container port: `8083`
- Host port: `8083`

A Dockerfile does not assign a running container's name; `docker run --name`
or the included Compose configuration does that.

### Alternative: Docker Compose

Use either the `docker run` method above **or** Compose, not both at once:

```sh
docker compose up --build -d
```

The included `compose.yaml` sets the required container name and port mapping.

### Verify the deployment

```sh
docker ps --filter name=Kaur_Parneet_coding_assignment12
docker inspect --format='{{.Config.WorkingDir}}' Kaur_Parneet_coding_assignment12
docker exec Kaur_Parneet_coding_assignment12 ls /Kaur_Parneet_ui_garden
```

Expected: a running container with port 8083 mapped, working directory
`/Kaur_Parneet_ui_garden`, and `index.html` plus a `static` directory.
On Windows PowerShell, check the HTTP response with:

```powershell
(Invoke-WebRequest http://127.0.0.1:8083).StatusCode
```

On macOS/Linux:

```sh
curl -I http://127.0.0.1:8083
```

Expected HTTP status: 200. Test the controls in the browser too; an HTTP response
alone does not verify React interactions.

### Stop or rebuild

For the `docker run` method:

```sh
docker stop Kaur_Parneet_coding_assignment12
docker rm Kaur_Parneet_coding_assignment12
```

Then rebuild and rerun. For Compose:

```sh
docker compose down
docker compose up --build -d
```

If port 8083 is in use, stop the existing application/container using it.
If the container name already exists, stop and remove the old assignment
container using the commands above, then run the new one.

## 7. Component and file checklist

| Component | Folder | Default/Disabled | Minimum tests |
| --- | --- | --- | --- |
| Button | `src/components/Button` | Yes | 2 |
| Label | `src/components/Label` | Yes | 2 |
| Text | `src/components/Text` | Yes | 2 |
| Table | `src/components/Table` | Yes | 2 |
| Table header | `src/components/TableHeader` | Yes | 2 |
| Table row | `src/components/TableRow` | Yes | 2 |
| Table cell | `src/components/TableCell` | Yes | 2 |
| Table footer | `src/components/TableFooter` | Yes | 2 |
| Dropdown | `src/components/Dropdown` | Yes | 2 |
| Radio button | `src/components/RadioButton` | Yes | 2 |
| Img | `src/components/Img` | Yes | 2 |
| Hero Image | `src/components/HeroImage` | Yes | 2 |
| Card | `src/components/Card` | Yes | 2 |

Each folder contains these five required files, using the actual component name:

```text
Button.tsx
Button.stories.tsx
Button.types.tsx
Button.tests.tsx
Index.ts
```

The uppercase `Index.ts` is intentional. Imports match its case so the code
also works on Linux. `src/components/index.ts` re-exports the public components.

## 8. Verify all assignment requirements

- [ ] `npm ci` completes on the target computer.
- [ ] `npm start` shows the CRA application.
- [ ] `npm run storybook` shows all 13 components, each with two stories.
- [ ] Controls change text/content, background colour, and disabled state.
- [ ] Disabled components have grey backgrounds and a not-allowed cursor.
- [ ] Button, dropdown, and radio use native disabled controls.
- [ ] `npm run test:ci` passes all tests.
- [ ] `npm run build` produces an optimized CRA build.
- [ ] `npm run build-storybook` produces static Storybook documentation.
- [ ] At 375px, 768px, and desktop widths, cards stack, images fit, and table
      content remains accessible (the table wrapper scrolls when necessary).
- [ ] Click Plant a seed; the counter increases. Preview disabled state; the
      button stops responding, dropdown/radios disable, and colours turn grey.
- [ ] Docker serves the production app at localhost:8083.
- [ ] Container name and working directory match the required values above.
- [ ] GitHub contains the source, lockfile, README, Dockerfile and configuration.
- [ ] LEARN Dropbox contains the ZIP and the actual GitHub repository link.
- [ ] Click **Submit** in LEARN after uploading.

Noninteractive elements such as Text and Img use `aria-disabled` to describe
the preview state. They do not gain click behaviour. Images become grayscale
as well as changing their wrapper's background. CSS transient props beginning
with `$` control styling without leaking custom attributes into the DOM.

## 9. GitHub and submission

Create an empty GitHub repository named `Kaur_Parneet_coding_assignment12`.
Do not initialize the remote with another README. In this project folder:

```sh
git init
git add .
git commit -m "Complete Assignment 12 React component library"
git branch -M main
```

Copy the HTTPS clone URL from **your new repository** and use it here:

```sh
git remote add origin YOUR_REPOSITORY_HTTPS_URL
git push -u origin main
```

Replace `YOUR_REPOSITORY_HTTPS_URL` with the real URL; it is not a literal command
argument to keep. Open the repository on GitHub and verify the files are there.
Submit this project ZIP and paste the repository's browser URL into LEARN.
`node_modules`, generated builds, and `.git` are intentionally excluded from
the ZIP. Dependencies are restored with `npm ci`.

## 10. Explanation for the demonstration

Read `EXPLAINING_THE_PROJECT.md` before demonstrating. Run the project and
practise explaining one component, its props, its stories, its tests, and the
Docker build. Review and adapt the code so you can explain the work you submit.

## References

- https://create-react-app.dev/docs/adding-typescript/
- https://storybook.js.org/docs/7/get-started
- https://styled-components.com/docs/basics#adapting-based-on-props
- https://github.com/testing-library/jest-dom#tohavestyle
- https://www.npmjs.com/package/jest-styled-components
