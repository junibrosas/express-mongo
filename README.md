# Express Mongo

This is a very minimal setup of Express + MongoDB + Docker.

### Run the application
First, install the npm packages
- `npm install`

Then build and up the docker via:
- `docker-compose up`

Other docker commands:
To run docker-compose in the background
- `docker-compose up -d`
To rebuild if you edited from Dockerfile or docker-compose.yml file then
- `docker-compose up --build`
To remove containers
- `docker-compose down -v`
To stop if you have it running in the backgroud
- `docker-compose stop`
