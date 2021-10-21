# Continuous Integration Boilerplate [![CI](https://github.com/spencerlepine/continuous-integration-boilerplate/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/spencerlepine/continuous-integration-boilerplate/actions/workflows/main.yml) [![Coverage Status](https://coveralls.io/repos/github/spencerlepine/continuous-integration-boilerplate/badge.svg?branch=main)](https://coveralls.io/github/spencerlepine/continuous-integration-boilerplate?branch=main)

Project boilerplate set up with Continuous Integration

### Setup

```sh
$ npm install
$ npm run start
```

## 📦 Technologies:

- [GitHub Actions](https://docs.github.com/en/actions)
  - Automated testing/building with isolated virtual machines
- [Husky](https://typicode.github.io/husky/#/)
- [ESLint](https://eslint.org/)
- [Lint-Staged](https://www.npmjs.com/package/lint-staged)
- [Jest](https://jestjs.io/)
- [Coveralls.io](https://coveralls.io/)

# Boilerplate Setup

- [`config.js`](./config/config.js): add configuration variables
- [`.env`](./.env): update enviroment variables
- [`README.md`](./github/workflows/main.yml): change badge URLS => `spencerlepine/continuous-integration-boilerplate` to `username/repo`

# Overview:

## GitHub Actions:

- Triggers on [main branch push](`.github/workflows/main.yml`)
- Triggers on [branch push or PR](`.github/workflows/branch.yml`)
- executes `npm test`
- executes `npm lint:check`
- Comments coverage on each Pull Request
- Uploads TEST coverage to [Coveralls.io](https://coveralls.io/)

## Pre-commit hooks

- Enforces linter styles
- Runs `npm test` to check before updating remote
- Note: `npm run husky:remove`:
  - **package.json script**: deletes husky files
  - macOS command: `rm -f .husky/pre-commit && rm -f .husky/pre-push`

---

[spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
