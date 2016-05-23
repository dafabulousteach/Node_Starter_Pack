# Node Starter Pack
In writing node code, I got tired of always having to build a simple server for every project. This code is a way to make your life easier.

## Installation
Either clone this repo or cut and paste to have a template in building a node server.
```javascript
npm install

```

## What framework is used in this Node Starter Pack?
As of now, this is written for [Hapi 13.4.1](http://hapijs.com/). I'll add an Express starter pack once I have more time.

## How do I use this?
My suggestion is that you look at the server.js file to see how a Hapi server is built. You can adjust the server.route code depending on your instantiation pattern. I am a fan of exporting modules, so the server.route code can be refactored like so:

```javascript
server.route(require('/*PATH TO YOUR ROUTES FOLDER'));
```
Make sure you export your routes so it can be used by the server.
