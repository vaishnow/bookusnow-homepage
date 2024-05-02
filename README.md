# BookUsNow - React Assignment

> Vercel Deployment Link - [BookUsNow](https://bookusnow-homepage.vercel.app)

## About

BookUsNow is a event management web application homepage built using React 18.2.0 to demonstrate frontend development skills

<details>
   <summary>Font and Color</summary>

- `Inter` - Font
- `#1E2022` - Font color (Heading)
- `#989090` - Font color (Subtitle)
- `#ffffff` - Background color
- `#CF2D2D` - Logo color
- `#B0BABF` - Stroke/border color

</details><br>

<details>
   <summary>Evaluation Criteria</summary>
  
  - Responsiveness: The website should work on both Desktop and Mobile browser.
  - API Integration: Effective fetching, usage, and display of data from a REST API.
  - Horizontal scrolling: Recommended events should support horizontal scroll.
  - Lazy loading: Upcoming events should be fetched page by page. The next page of events should be fetched from the API only when the user has scrolled to the end of the website.
  - CSS: Usage of color and fonts as provided in the instructions.
  - Performance: Optimization techniques for fast loading times.
  - Code Quality: Cleanliness, organization, and documentation of code.

</details><br>

# Setup

## Getting the code

- Clone repository using git clone

  ```bash
  git clone https://github.com/vaishnow/bookusnow-homepage
  ```

## Install pnpm (skip if pnpm is already installed)

- This project was setup using pnpm, to run this project you need to install pnpm first

  ```bash
  npm install -g pnpm
  ```

## Navigate to the project directory

- Replace `bookusnow-homepage` with project directory if necessary

  ```bash
  cd bookusnow-homepage
  ```

## Development

- Install dependencies

  ```bash
  pnpm install
  ```

- Run the development server

  ```bash
  pnpm run dev
  ```

This will start the development server and the website will be available at http://localhost:5173.

# Technical Decisions

## Packages

- **TypeScript**
  Utilizing TypeScript for static typing to enhance code quality and catch potential errors during development.
- **Tailwind CSS**
  Tailwind CSS for responsive utility classes, CSS grid, and media queries to ensure adaptive layouts for desktop and mobile screens.
- **Axios**
  Utilizing axios for making HTTP requests to fetch event data from specified APIs.
- **React Query**:React Query for optimizing data-fetching, error handling and caching which provides for overall better performance.
- **Shadcn-ui**: For beautiful and accessible prebuilt ui components and providing better user experience.
- **React Icons**
  Icon Integration: Incorporating React Icons for easily adding icons to enhance UI components and improve visual representation.

## Performance Optimizations

- **Lazy loading**: for improving bandwidth usage and load speed by not loading unecessary images.
- **Webp Format**: Convert banner image to webp format for better compression.
- **Responsive images**: Loaded banner image based on viewport width resulting in optimized load speed.
- **Google drive thumbnail width**: Adjusted google drive thumbnail width for balanced quality and speed.
- **Woff2 Fonts**: Used woff2 format font files to reduce size and increase load speed.

## Design choices

- **Infinite Scroll**: Utilised intersection observer to trigger data fetching automatically.
- **Loading Skeletons**: Loading skeletons from shadcn to fill up empty space while data is being fetched.

<br><br><br>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
