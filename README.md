# Hugo site with an embedded Vue app

Vue app is located in `src/dashboard`, once you run the build command `yarn build`, the vue app will be built into the `static/dist/dashboard` folder. From here the `layouts/dashboard/baseof.html` template will embed the vue app using the generated `data/webpack_asset_dashboard.json` file.

The vue app has routing set up, so any page under the `/dashboard` path will render the Vue app, meaning you can't have any Hugo generated pages under that path.

## Issues

1. You need to create a `.md` file for each Vue route, otherwise Hugo will 404

## Test it out yourself

1. Clone the repo
2. Change node version to `.nvmrc` version
3. Change to `src/dashboard`
4. Run `yarn` & `yarn build`
5. Go back to the root and build the Hugo site; `hugo`
6. Serve the site; `npx serve public`
