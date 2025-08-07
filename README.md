# Banned.video browser client
This application is part of a comment archival project intended to backup for the [banned.video](https://banned.video) website.

## Pre-requisites
node.js & npm

## Instructions
1. Download this repository & navigate to the downloaded repo with a terminal
2. Configure the .env file with the URL to a banned-browser-server hosting a channel archive
3. Run `npm install` to install all the dependencies
4. Run `npm run build && npm run preview` to launch the application

This will run a preview server locally, if you intend to host the application the required files
will be located in the /dist folder after the `npm run build`-command is run.
