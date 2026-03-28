# Dockerized Node.js Application

This project demonstrates containerizing a Node.js application using Docker.

## Features
- Simple Node.js web server
- Docker containerization
- Runs on port 3000

## Build Image
docker build -t docker-app .

## Run Container
docker run -p 3000:3000 docker-app

## Output
Open http://localhost:3000 to view the application
