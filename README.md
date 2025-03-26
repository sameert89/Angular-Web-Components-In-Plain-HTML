# Building the component

Just build using `ng build` as usual. This should create a dist folder with
some`.js` files. Namely:

```js
main - XXXXX.js;
polyfills - YYYYY.js;
```

# Running the html project

Remove the hash ids from the file names and move them to the test-page folder.
The `index.html` file already registers the js files correctly at the end of the
body tag.

Serve the test-page folder using any web server such as `live-server vscode
extension`, `npm http-server` or any other web server.

See the results in the browser!!!

ps: I am a Keanu-Reeves Fan :)
