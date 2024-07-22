# Frontend Assessment

This project is a web application built with Vite, React, and TypeScript, using React Router v6 for routing.

## Technologies Used

- Vite
- React
- TypeScript
- React Router v6
- Day.js
- GitHub Pages (for deployment)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 12 or higher)

### Installation

1. Clone the repository:
git clone https://github.com/weekash/breathing-pond.git
Copy
2. Navigate to the project directory:
`cd your-repo-name`
3. Install dependencies:
`npm install`

### Development

To run the project in development mode:
`npm run dev`

### Build

To build the project for production:
`npm run build`

## Routing

This project uses React Router v6 for routing. Due to deployment on GitHub Pages, we've switched from BrowserRouter to HashRouter.

Accessible routes:
- [/#/feed](https://weekash.github.io/breathing-pond/#/feed)
- [/#/login](https://weekash.github.io/breathing-pond/#/login)
- [/#/signup](https://weekash.github.io/breathing-pond/#/signup)

## Deployment

This project is deployed using GitHub Pages. The switch from BrowserRouter to HashRouter was necessary to ensure proper routing on GitHub Pages.
1. Change base path in  `vite.config.ts`
2. Change `homepage` in `package.json`
3. To deploy the project:
`npm run deploy`
