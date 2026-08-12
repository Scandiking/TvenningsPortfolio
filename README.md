# [TvenningsPortfolio](https://scandiking.github.io/TvenningsPortfolio/#/)

> A React single-page portfolio site showcasing university coursework and GitHub repositories.

![An image with a coffee cup, a phone, and a laptop](./public/images/workstation.png)

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

This repository holds the source for a portfolio site deployed to [scandiking.github.io](https://scandiking.github.io/TvenningsPortfolio/#/). It presents assignments and submissions from the IT and Information Systems program at the University of South-Eastern Norway (USN), Ringerike campus, Hønefoss.

IT and Information Systems is a broad field of study, and this repository is meant to present the skills built up during the program in a clean and organized way.

The site is aimed primarily at prospective employers. GitHub itself works well as a basis for evaluation by CTOs and other technical reviewers, thanks to code and commit history. For non-technical reviewers, the deployed website built from this repository offers a more presentable and readable format.

## Install

The project requires [Node.js](https://nodejs.org/) and npm. Clone the repository and install dependencies:

```bash
git clone https://github.com/Scandiking/TvenningsPortfolio.git
cd TvenningsPortfolio
npm install
```

## Usage

```bash
npm start          # Development server at localhost:3000
npm run build       # Production build
npm test            # Run tests
npm run deploy      # Build and deploy to GitHub Pages (gh-pages)
```

The app is a React SPA that uses `HashRouter` (required for GitHub Pages), so all routes are served as `/#/path`. In production it is served from `/TvenningsPortfolio/`.

## Maintainers

[@Scandiking](https://github.com/Scandiking)

## Contributing

This is a personal coursework repository and is not open for external contributions. That said, issues and pull requests pointing out bugs or improvements are welcome and will be reviewed on a best-effort basis.

## License

No license is granted. All rights reserved. The code and content in this repository are shown for portfolio and demonstration purposes only and may not be reused, copied, or redistributed without permission.
