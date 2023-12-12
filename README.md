# Spring Boot Vite example

[![CI](https://github.com/Kaltsoon/spring-boot-vite-example/actions/workflows/ci.yml/badge.svg)](https://github.com/Kaltsoon/spring-boot-vite-example/actions/workflows/ci.yml)

This is an example project for a single-page application implemented with Spring Boot and React. Vite is used as the frontend build tool.

## Usage guide

### Backend development

You need to perform the following steps to setup the backend:

1. Add a `local.properties` file to the `src/main/resources` folder (same folder that has the `application.properties` file) with the following content:

   ```
   auth.jwt-secret=<jwt-secret>
   ```

   Replace the `<jwt-secret>` with a string that has at least 32 characters.

Then, you can start the backend application by performing the following steps:

1. Start the server by running the `./mvnw spring-boot:run` command
2. Once the server has started, the application is accessible at <http://localhost:8080>

#### Running tests

You can run the backend tests by running the `./mvnw test` command.

### Frontend development

You can start the frontend application by performing the following steps in the `frontend` folder:

1. Install the dependencies by running the `npm install` command
2. Start the Vite development server by running the `npm run dev` command
3. Once the development server has started, the application is accessible at <http://localhost:5173>
