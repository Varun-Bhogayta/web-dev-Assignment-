# Earninn : Vite-React-TS project

This project is a web application built using Vite, Tailwind CSS, and TypeScript. It includes a responsive navigation bar, portfolio overview, KYC completion, and bonds listing components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [State Management](#state-management)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/vite-tailwind-ts-project.git
   cd vite-tailwind-ts-project

2. Install dependencies:
   ```sh
   npm install

3. Start the development server:
    ```sh
    npm run dev   

4. Open your browser and navigate to [http://localhost:3000.](http://localhost:5173.)

## Usage

To build the project for production, run: 
  
    npm run build

To preview the production build, run:

    npm run serve

## Component Structure
The project has a simple component structure:

```src/components/Nevbar.tsx:``` The main navigation bar component.

```src/components/Portfolio_kyc.tsx:``` The portfolio overview and KYC completion component.

```src/components/Bonds.tsx:``` The bonds listing component.

```src/components/ui/button.tsx:``` A reusable button component.

```src/components/ui/card.tsx:``` A reusable card component.

```src/components/ui/badge.tsx:``` A reusable badge component.

```src/components/mode-toggle.tsx:``` A component to toggle between light and dark modes.

### Nevbar Component
The ```Nevbar``` component includes a responsive navigation bar with links and a menu toggle button. It uses CSS variables defined in app.css for styling.

### Portfolio_kyc Component
The ```Portfolio_kyc``` component displays an overview of the user's portfolio and a section to complete KYC.

### Bonds Component
The ```Bonds``` component lists various bonds with details such as sell percentage, XIRR, maturity date, and minimum investment.

## State Management
The project uses React's built-in useState and useEffect hooks for state management.

### Nevbar Component
```isOpen:``` A boolean state to track whether the navigation menu is open or closed.

```isMobile:``` A boolean state to track whether the screen size is mobile or desktop.
The useEffect hook is used to add an event listener for window resize events to update the isMobile state accordingly.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.