[![npm version](https://badge.fury.io/js/weather-simple-cli.svg)](https://badge.fury.io/js/weather-simple-cli)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Weather Simple CLI

> With this package you can check the weather in your city through the terminal

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Installation

Start with cloning this repo on your local machine:

```sh
$ https://github.com/marknik139/weather-simple-cli.git
$ cd weather-simple-cli
```

To install and set up the library, run:

```sh
$ npm install -g weather-simple-cli
```

Or if you prefer using Yarn:

```sh
$ yarn global add weather-simple-cli
```

Get a free API Key at [openweathermap.com](https://openweathermap.org/api)

## Usage

### Set api token
```sh
$ weather -t [API_KEY]
```
### Set your city 
```sh
$ weather -s [CITY]
```

### Run the app

```sh
$ weather
```

## License

ISC License
