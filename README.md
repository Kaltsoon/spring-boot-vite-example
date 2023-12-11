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

1. Run `./mvnw spring-boot:run` command
2. Once the server has started, the application is accessible at <http://localhost:8080>

### Frontend development

You can start the frontend application by performing the following steps in the `frontend` folder:

1. Install the dependencies by running `npm install`
2. Start the Vite development server by running `npm run dev`
3. Once the development server has started, the application is accessible at <http://localhost:5173>

### Running backend tests

You can run the backend tests by running the `./mvnw test` command.
