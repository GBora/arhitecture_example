# Architecture example (Guarded Eyrie)

This is a reference implementation for the architecture patterns we will use in the node.js community as a
starting point in new applications.

Specifically in this project the architectural patterns involved are:

- monolith application repo
- n-layer architecture
- pipes and filters communication pattern
- REST api as the external layer

This repository uses typescript instead of javascript to help with the large number of interfaces needed for 
communication between the layers as well as maintain consistency with the codebase being split over a large 
number of files.

As per community used consensus the `dist/` folder will hold the compiled js.

## Running locally 

The command `npm run dev` will start a local server without compiling the .ts files, it will run the .ts files directly. THIS IS NOT WHAT HAPPENS IN PRODUCTION AND YOU NEED TO COMPILE THE TS FILES FOR THE CHANGES TO SHOW UP ON HEROKU OR WHERE IT IS DEPLOYED.

The command `npm run tsc` will generate a js build in `dist/`.

The command `npm start` will start the server but it will use the compiled files.

This section is actually just about running the API portion of the application

## Running locally with a FE

If you follow the instructions above you WILL have a frontend, but it will be a static build.

If you need to do work on both the FE and BE, start the BE (this node API) and then in the FE (angular application) point it's base url to lead to the local.

If you want to load a custom build into your local BE, just copy it's contents into the correct folder:

a) If you're running the .ts with `npm run dev` copy the FE into `src/public`.

b) If you're running the .js files with `npm start` copy the FE into `dist/public/`.