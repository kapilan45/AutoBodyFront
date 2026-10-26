# AutoBodyFront

Angular frontend for browsing, publishing, and managing vehicle announcements.
The frontend is pinned to Angular 22.2.3 with Angular CLI/build 22.2.4.

## Requirements

- Node.js `^22.22.3`, `^24.15.0`, or `>=26.0.0` (required by Angular CLI 22)
- npm 11 or newer
- A running AutoBodyBack API

## Install and run

```bash
npm ci
npm start
```

The development server is available at `http://localhost:4200/`.

## API configuration

Development builds use `http://localhost:8080/api` for API endpoints and
`http://localhost:8080/login` for login. Production builds use the same-origin
paths `/api` and `/login`; configure the production web server or reverse proxy
to forward those paths to AutoBodyBack. Update the corresponding values in
`src/environments/environment.ts` or `src/environments/environment.prod.ts`
when the deployment topology differs.

Login expects a user object in the response body and the JWT in the
`cache-control` response header. Registration returns a user object without a
token, so the frontend performs a login after a successful registration.
The “Me souvenir” option stores the session in local storage; without it, the
session is kept only in memory and ends when the page is reloaded or closed.
Protected announcement requests send the token in `Authorization`.

## Build

```bash
npm run build
npm run build -- --configuration production
```

## Existing unit tests

```bash
npm test
```

The Karma runner uses ChromeHeadless and requires a compatible Chrome/Chromium
installation. No test coverage has been added as part of the Angular migration.

## Lint and end-to-end status

The legacy TSLint configuration and Protractor setup were removed because they
are incompatible with the supported Angular CLI. This repository does not
currently configure a replacement linter or an end-to-end test runner.
