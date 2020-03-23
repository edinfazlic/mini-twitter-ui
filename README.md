# MiniTwitterUi

This application is mini imitation of Twitter. Users are able to register, login, preview tweets of other users they follow and check their profile.

## Used

Angular, version 5
NGXS, for state management
Bootstrap, UI responsiveness
TSlint (plus codelyzer), for static code analysis
GitHub, for review

## Functionalities

.

## Meta info
Application showcases knowledge of:
  - Angular
    - Component communication
    - Lifecycle hooks utilization
    - Routing (with useHash routing strategy)
    - Guards (can activate)
    - HTTP Interceptor (used to set Authorization header)
    - Forcing OnPush change detection strategy 
    - Using pipes (async)
    - Modules mutual dependencies
    - Forms (with validators)
  - State management with NGXS
    - Actions - with and without payload
    - States - specific for a feature or certain set of features
    - Selectors - plain and calculated ones
    - Chaining actions
    - NGXS storage plugin (Saving state to LocalStorage)
  - Reactive programming with RxJS library
    - Passing Observable as a parameter, variable, object
    - Immediately subscribing to Observables
    - Pipe usage for multiple async calls (with tap, map)
  - Typescript
    - Fat-arrow functions (preserving "this" context and making code more readable with meaningful names)
    - Partial
  - General
    - REST calls
      - GET with path variables and request parameters
      - POST with body 
    - Data structures
      - Array (for tweets management), upon which JS array methods were used (map())
    - Bootstrap (UI responsiveness)
    - Having git commit messages readable
  - Concepts
    - Separation of concerns
    - "N-tier architecture"
      - Display and styling only, without any logic (HTML template and CSS) - only communicates with Controllers
      - Component specific logic (Controllers) - only communicates with States through Actions and Selectors
      - State containers (States) - expose Selectors, implement Actions, and invoke Services
      - Invoking outside of the application (Services) - only communicated by States
    - Linting (with TSlint - strict, but not AirBnB rules)
    - Refactoring (Introducing NGXS...)
    - Prototyping (Fast completion without full functionality displaying test concept, process or design)
  - Operations
    - Setting different environments (development and production)
    - Deploying application (on Netlify)

## Development server
1. Have server api ([found here](https://github.com/edinfazlic/location-api)) running. 
1. Run `ng serve` or `npm start` and navigate to `http://localhost:4200/`. 
