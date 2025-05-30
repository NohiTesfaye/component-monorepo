# Feature X - Simple Counter

This package implements a simple counter feature for the monorepo project.

## Functionality

The counter allows users to increment and decrement a numerical value displayed on the screen.

## Architecture

The feature is implemented as a React component (`Counter.jsx`) that manages its own state using the `useState` hook. The main application component (`App.jsx`) in this package renders the `Counter` component. 

## Running in Isolation

To run this individual feature outside the main assembled application:

1. Navigate to the `packages/feature-x` directory in your terminal.
   ```bash
   cd packages/feature-x
   ```
2. Run the standalone development script:
   ```bash
   npm run dev:standalone
   ```

This will start a Vite development server serving only the Feature X application. 