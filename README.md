# Pinellas911.co Incidents API - OVAL002

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Background

* **Purpose**: Primarily to make it easy to retrieve incident history for [Pinellas911.co](https://www.pinellas911.co) should the pub/sub client lose its connection, a new user loads the page or when the page happens to get refreshed. Secondarily it will be used for incident search in the future.

If you're a visual person the following sequence is what happens:
![](https://blog.pusher.com/wp-content/uploads/2015/11/message-history-449x300.png)

### Technical Approach

- [ESLint](http://eslint.org)
  - Pluggable linting utility for JavaScript
  - [JavaScript Standard Style](http://standardjs.com/)

#### Configuration Management
- [NPM](https://www.npmjs.com)
  - Provides dependency management
  - Provides scripted builds
- [Docker](http://docker.com)
  - Provides portable containers of pre-configured software

#### Back-end
- [node.js](https://nodejs.org)
- MongoDB
- Express
  - Providing API end-points
- Mongoose

#### Deploying
You can push it to a Heroku or Dokku server.
