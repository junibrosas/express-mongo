# Express Mongo

This is a very minimal setup of Express + MongoDB + Docker.

### Run the application
First, install the npm packages
- `npm install`

Then build and up the docker via:
- `docker-compose up`

Other docker commands:
- `docker-compose up -d` // to run docker-compose in the background
- `docker-compose up --build` // to rebuild if you edited from Dockerfile or docker-compose.yml file then
- `docker-compose down -v` // to remove containers
- `docker-compose stop` // to stop if you have it running in the backgroud
