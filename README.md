# Architecture example

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