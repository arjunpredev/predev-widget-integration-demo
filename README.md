# predev-widget-integration-demo

This repository showcases the onboarding widget created by Pre.dev, implemented in a React application. Follow the instructions below to set up and run the project locally.

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

## Using the Pre.dev Widget

1. **Importing the Widget**: Import the Pre.dev widget component into your React component file.

   ```jsx
   	import PredevWidget from 'predev-widget';
   ```

2. **Rendering the Widget**: Use the Pre.dev widget component in your React component's render method.

   ```jsx
   function App() {
     return (
       <div className="App">
         <h1>Pre.dev Widget Showcase</h1>
         <PredevWidget />
       </div>
     );
   }
   ```

3. **Customization**: Customize the Pre.dev widget by passing props according to the widget’s API documentation.

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.