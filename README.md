<div align='center'>
  <img src='https://pre.dev/predevlogowhitebackground.png' height='100px'>
  <h1>pre.dev Widget Integration Demo</h1>
  <p>From idea to product in weeks, not months.</p>
  <p><b>Get your API-Key</b> at <a href='https://pre.dev/enterprise'>https://pre.dev/enterprise</a></p>
</div>

This repository showcases a React application implementing the onboarding widget created by pre.dev. Follow the instructions below to set up, customize, and run the project locally.

## Prerequisites

- Node.js v14.x or later
- Yarn v1.x or later

## Installation

Clone the repository:

```sh
git clone https://github.com/username/predev-widget-showcase.git
cd predev-widget-showcase
```

Install the dependencies:

```sh
yarn install
```

## Running the Application

Start the development server:

```sh
yarn run start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Installing the pre.dev React Components

  `npm install predev-react-components`

## Onboarding Widget

### Import Module

```javascript

import {OnboardingWidget} from 'predev-react-components';

```

### Embed Module

```javascript
<OnboardingWidget apiKey={`API_KEY`}  />

```