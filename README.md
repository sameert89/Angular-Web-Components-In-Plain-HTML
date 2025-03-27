# Building the component

Just build using `ng build` as usual. This should create a dist folder with
some`.js` files. Namely:

```js
main - XXXXX.js;
polyfills - YYYYY.js;
```

# Running the html project

Remove the hash ids (XXXX/YYYY) from the file names and move them to the test-page folder as `main.js` and `polyfills.js`.
The `index.html` file already registers the js files correctly at the end of the
body tag.

Serve the test-page folder using any web server such as:


1.`live-server vscode extension` (RECOMMENDED:  just install extension and right click the `index.html` inside `test-page` and select `Open With Live  Server`>

2. `http-server`: run `npm install -g http-server` then `cd` into `test-page` folder, and run `npx http-server`.

See the results in the browser!!!

ps: I am a Keanu-Reeves Fan :)
