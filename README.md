# FirstTracks

[Live App](https://acareaga.github.io/first-tracks/)

## Description

Weather, avalanche, and backcountry travel data for the snow community on a web platform that simplifies the user experience. The `FirstTracks` codebase is maintained by [Aaron Careaga](https://twitter.com/aaroncareaga) and [Kaska](http://www.kaska.co/).

## Installation

Clone repository and install dependencies:

```
$ git clone git@github.com:acareaga/first-tracks.git
$ cd first-tracks
$ npm install
```
## Usage

Fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run the application.
* `http://localhost:8080/webpack-dev-server/test.html` to run the test suite in the browser.

To build the static files:

```js
npm run build
```

To run tests in Node:

```js
npm test
```

## Dependencies

Uses with the following versions:

```
"chai": "3.4.1",
"mocha": "2.3.4"
```

## Contributing

To submit patches:
* Fork this repository
* Implement the desired feature with tests (and documentation if necessary)
* Submit a pull request

### Future

Features that would be nice to include:
* Integration with Forecast.io's weather API

Please open an issue if you have any other updates that would be nice to have.

## License

The `FirstTracks` codebase is released under the [MIT License](http://www.opensource.org/licenses/MIT).
