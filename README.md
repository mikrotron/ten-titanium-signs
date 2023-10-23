# Commentater // Intuit Assigment

A comments feed that displays all comments and notifies a user in real-time when new comments are added.

## Getting started 🚀

- Install dependencies: `npm i`
- Run Express server + client in dev mode: `npm run dev` or `npm run server` and `npm start`
- Check for linter and TypeScript errors: `npm run lint`
- Run unit tests in watch mode: `npm run test`
- To build the project: `npm run build`
- To run the build: `npm run preview`

### CodeSandbox alternative 

- Project: https://codesandbox.io/p/github/mikrotron/ten-titanium-signs/sandbox
- UI: https://f62f5y-5173.csb.app/

## Code notes ✍️

- This project is built with a [Vite](https://vitejs.dev/) template for **React** and **TypeScript**.
- To ensure new messages are available to the client, a polling strategy is used with the [SWR](https://swr.vercel.app/) library.
- Styling is applied with my favourite CSS-in-JS library, [styled-components](https://styled-components.com/) with a very basic set of design tokens.
- A11y tools
  - [WebAim contrast checker](https://webaim.org/resources/contrastchecker/)
  - [VoiceOver](https://support.apple.com/en-ca/guide/voiceover/welcome/mac)
  - [Google Lighthouse Chrome extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
  - [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- Unit testing tools
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Vitest](https://vitest.dev/)
- File structure inspired by Josh Comeau
  https://www.joshwcomeau.com/react/file-structure/

## Reflections 🤔

This assignment was an opportunity to apply my coding abilities with a variety of modern technologies that I haven't used for some time in my current role. I enjoyed digging into some of the details and definitely learned (and relearned) a few things along the way!

I've tried to showcase my knowledge of accessibility practices, and spent a little extra time at the end to:

- Test all functionality thoroughly with the keyboard
- Test the feature with browser zoom level set to 400%
- Test the functionality with a screen reader (VoiceOver)
- Run a couple of automated tests and install the `jsx-a11y` plugin for ESLint

It should be noted that I used VSCode with GitHub Copilot throughout this assignment. It was particularly helpful in suggesting the appropriate types to use, saving me time I would've had to spend looking them up on Google. As the assignment progressed, and there was more code for it to reference, it became more helpful at predicting what I wanted as I refactored and moved code around. It was also frequently wrong or unhelpful – I wouldn't trust it to fly solo.

There are still a few rough edges and incomplete aspects of this project, but I am satisfied with the current result and believe it will serve the purpose as a sample of my coding abilities.
