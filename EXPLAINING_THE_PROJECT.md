# Explaining UI Garden

## How the pieces fit together

`src/index.tsx` mounts the application. `App.tsx` composes the reusable components
into a small demonstration. React state tracks the number of button clicks,
dropdown selection, radio selection, and whether to preview disabled styling.

Each component's `.types.tsx` interface documents its accepted props. Extending
native React element types allows normal properties such as `onClick`, `id`,
`htmlFor`, and `aria-label` without duplicating their definitions.

The `.tsx` file renders the appropriate HTML element and styles it using
styled-components. `shared.ts` holds common background, colour, cursor and
responsive rules. Components add their own layout rules. A disabled component
uses `#d1d5db`, even if a different background was supplied.

`Index.ts` provides the public exports for a component's folder. The central
`src/components/index.ts` gathers those exports for simpler application imports.

## Walk through Button

1. `ButtonProps` extends normal button properties and adds `backgroundColor`.
2. The component reads `children`, `disabled`, `backgroundColor`, and `onClick`.
3. The styled Root receives `$disabled` and `$backgroundColor`. The dollar prefix
   marks styling-only props, which are not passed to the HTML element.
4. The HTML button receives the actual `disabled` property. This prevents normal
   user activation. The click handler is also removed in the disabled state.
5. `Button.stories.tsx` supplies sample arguments and Default/Disabled stories.
6. `Button.tests.tsx` checks visibility and checks the style before and after a
   disabled rerender. The interaction test checks click handler behaviour.

## Why Storybook?

Storybook displays components in isolation. Controls change props interactively
without changing the source code. Stories capture repeatable states, including
states that are harder to reach in a full application. The table subcomponent
stories use decorators to provide valid enclosing HTML table structures.

## Why these tests?

Visibility verifies that a default render produces something visible. A before
and after style assertion verifies that disabled changes the actual background,
rather than only checking that a `disabled` property exists. Checking the cursor
covers the visual interaction cue. Additional interaction tests verify that a
button calls its callback and that a dropdown reports a changed selection.

Jest's jsdom environment does not perform browser layout. Check responsiveness
in a real browser using the README's widths; unit tests do not prove layout.

## How responsiveness works

The demo uses a grid that automatically changes its number of columns. Images
use fluid widths and keep their aspect ratio. Spacing and hero heading sizes
use `clamp`. Components have a maximum width and wrap long text. The table sits
inside a horizontally scrollable wrapper so narrow screens can access its data.

## How Docker works

The first stage has Node and runs `npm ci` followed by `npm run build`.
CRA bundles and minifies the production app. The second stage starts from Nginx
and copies only the generated site into `/Kaur_Parneet_ui_garden`.
Nginx listens on port 8083. `-p 8083:8083` maps the host port to the container port.
The `--name` argument assigns the required container name.

Storybook is a development/documentation tool. The required Docker deployment
hosts the production CRA app. `npm run build-storybook` separately verifies
that the documentation can also be packaged as static assets.

## Practise this short demo

- Open the app, click Plant a seed, and change the dropdown/radio choice.
- Toggle the disabled preview and explain the grey background and cursor.
- Open Storybook's Button stories and edit its text and background controls.
- Show the component folder's five files and explain their roles.
- Run the test suite and explain one visibility and one background assertion.
- Show the Dockerfile stages, run the container, and open localhost:8083.
