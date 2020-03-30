# MiniTwitterUi

This application is mini imitation of Twitter. Users are able to register, login, preview tweets of other users they follow and check their profile.

## Used

- Angular, version 5
- NGXS, for state management
- Bootstrap, UI responsiveness
- TSlint (plus codelyzer), for static code analysis
- GitHub, for review

## Functionalities

Arriving to the application, first what users are going to see is login screen. To have access to use the application, it's necessary to signup/register. There is a link to registration page from login page. Registration is simple form with few validations.

After successful registration it's possible to log in immediatelly.
In the application, users can search for other people by their first name, last name or username, all through a single field in the Exploration page. After finding person of interest, it can be navigated to that persons profile.

In that persons profile page, user can Follow that person. By doing so, user will see that persons tweets, along with other tweets of other people user follows, on Tweets page.
In case where user already follows that person, user can see corresponding info. User can also see appropriate message when followed by that person, or if they follow each other.
Next to that info, user can see how many tweets person has created, how many followers that person has, or how many other people are following that person.
Underneath all those info are the actual tweets that person created.

User can also create own tweets, and that can be accomplished from any page, except from Exploration page.
User can also navigate to own profile and see all the same information like when viewing other persons profile page, except the following information, of course. Instead of that, user will see personalized greeting.

Each waiting of data is accompanied with a spinner, next to the Logout button in the navigation bar. Other than Logout, other mentioned important pages can be found in the navigation bar as well, like: Exploration (search for other people), Tweets (see tweets of people I follow), My Tweets (my profile page).

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
