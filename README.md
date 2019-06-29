# node.js-puppeteer-api-example
this is a simple puppeteer api example.


## Getting Started

In order to install the application clone the repo.

Open cmd at project root and type
```
npm i
node app
or
docker-compose up

```


### Prerequisites

```
* Node
* docker.

```

### Dev Installing

**Setting up a deveplopment env**

Clone this repo.
```
git clone https://github.com/bmatoki/node.js-puppeteer-api-example.git
```

Install the node dependencies for each service.

```
npm i 

```


### Running the tests

The tests are mocha and chai based and needs a working dev environment.
Currently only the node apps contains unit and e2e testing.

Before running the test, the test config env needs to be updated with the relevant dev/prod details.
The config file can be found at config.js

```
config.json file:

{
  production: {....},
  test: {
    cors: {
      origin: '*',
      methods: 'GET,POST',
    },
    logger: {
      morganLevel: 'debug',
      level: 'info',
    },
  }
  development: {....}
}

```
To run the tests.

```
npm run test

```



### coding style 

Each code addition must be in line with the eslint and tslint in the project.
Those extend the airbnb style guide.

## Deployment

To install a production ready application you can follow the [Dev Installing](#dev-installing) after installing/validating Prerequisites are met.

## Uninstalling

Uninstall steps:
 * node - simply delete the files.
 * docker - stop the containers.


## Built With

* Node.
* docker
* pm2.


## Authors

* Boaz Matoki
