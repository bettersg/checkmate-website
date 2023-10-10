# Checkmate.sg Website

Built with React and Tailwind CSS.

Powered by Firebase.

View the latest test environment [here.](https://checkmate-website--previewcheckmatev2-74pfu549.web.app)

## Getting Started

```bash
git clone https://github.com/bettersg/checkmate-website
cd checkmate-website
npm i
```

Alternatively, open the folder in VSCode's [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).

Then, create (or edit) a `.env` file in the main directory with the following variables:

```
//.env

VITE_API_KEY=<redacted>
VITE_AUTH_DOMAIN=<redacted>
VITE_PROJECT_ID=<redacted>
VITE_STORAGE_BUCKET=<redacted>
VITE_MESSAGING_SENDER_ID=<redacted>
VITE_APP_ID=<redacted>
```

Start the development server:

```
npm run dev
```

## Commits

The main branch is currently `webv2`. Push commits to feature branches, for example:

```
git push origin webv2:feat/<your-feature-name>
```
