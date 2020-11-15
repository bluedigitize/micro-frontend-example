# Micro FE example

A very simple micro frontend boilerplate application.

Start from `example-root-config`.

Run with `docker-compose up -d` and visit localhost

## Things to note.
- store.js uses the window object to attatch a "global" store to. This allows the other frontends to hook onto and catch/dispatch events.
- The url's are hard coded atm but should be injected via env variables.
- There is a production example within the dockerfiles. change the target within the docker-compose to `production` and rebuild to experiment with.
