# MatchingEngineTests
 
# Cypress Test Project with TypeScript

This project is configured to use [Cypress](https://www.cypress.io/) for end-to-end UI testing with [TypeScript](https://www.typescriptlang.org/). 

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) 

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sharraut7294/MatchingEngineTests.git
   cd your-repository

2. **Install Dependencies:**

 Install project dependencies using npm:
 ``` 
 npm install
 ```

## Configuration

**Cypress Configuration**

Cypress configuration is located in cypress.config.ts. You can customize Cypress settings such as viewport size, browser configuration, and more.

Example Configuration (cypress.config.ts):
 ``` 
 import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});

 ```
**TypeScript Configuration**


TypeScript configuration is located in tsconfig.json. Adjust TypeScript settings as needed.

Example Configuration (tsconfig.json):
``` 
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "types": ["cypress"]
  },
  "include": ["cypress/**/*.ts"],
  "exclude": ["node_modules"]
}

 ```
## Writing Tests

Cypress tests are located in the cypress/e2e directory. Create test files with the .ts extension for TypeScript support.

Example Test File (cypress/e2e/example_spec.ts):
``` 
describe('My First Test', () => {
  it('should visit the homepage', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });
});


 ```

## Running Tests

You can run Cypress tests in different modes:

**Run Cypress Interactive Mode**

To open Cypress Test Runner in interactive mode:

```
npx cypress open

``` 

**Run Cypress in Headless Mode**

To run Cypress tests in headless mode (suitable for CI/CD):


```
npx cypress run

```

**Run Cypress in Specific Browser**


To specify a browser (e.g., Chrome):


```
npx cypress run --browser chrome

```
