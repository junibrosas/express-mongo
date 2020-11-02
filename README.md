This is a very minimal setup of Express + MongoDB + Docker.

# Run the application

`docker-compose up`
`docker-compose up -d` // to run docker-compose in the background
`docker-compose up --build` // to rebuild if you edited from Dockerfile or docker-compose.yml file then

`docker-compose down -v` // to remove containers
`docker-compose stop` // to stop if you have it running in the backgroud
