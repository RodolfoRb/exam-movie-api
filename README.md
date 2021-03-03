# exam-movie-api

# Prerequisites
Nodejs
Jest

# Demo
The Link to publish demo http://movieapi.rebollo.tech/api-docs/

You can download the public container from gitlab registry.gitlab.com/rodolforb/exam-movie-api

------------
	docker-compose.yml
	version: '3'
	services:
	  movieapi:
		image: registry.gitlab.com/rodolforb/exam-movie-api:latest
		ports:
		  -- 4000:4000
------------

# Nodejs 14.16
https://nodejs.org/en/

Run dev server
- npm install
- npm run start

Navigate to http://localhost:4000/. The app will automatically reload if you change any of the source files.

# Docker-compose
Run docker container
- docker-compose up --build

Navigate to http://localhost:4000/.

# Api documentation
1. movie-api.postman.json
2. http://localhost:4000/api-docs

# Jest 26.6.3
https://jestjs.io/docs/en/getting-started
npm install jest --global

Running unit tests
- npm install
- npm run start



exam-movie-api
