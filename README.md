# Simple Front End API
this is a simple build of the front end API for astrology that will not use a framework
It is designed without a back end.  It accesses the Astrology API directly with the form submission and then returns the information to the webpage.
Using: 
- Node js
- Fetch
- Express (not used but installed)
- webpack

Issues, 
- currentlly not working
- loads wepage with `npm start`
- will not hit api, gives:
index.js:51 Error ReferenceError: process is not defined
    at HTMLFormElement.eval (index.js:37:44)

## Build
Using npm 
`npm init -y` for setup
Use shift alt F to auto format vs code
This added to the package.json:
`  "scripts": {`
    `"start":"node index.js"`
Express:
`npm install express`
Env dotenv:
`npm install dotenv`
Fetch
`npm install node-fetch`
Webpack
`npm install webpack webpack-cli --save-dev`
`npm install html-webpack-plugin --save-dev`
`npm install webpack-dev-server --save-dev`
`npm install path-browserify os-browserify crypto-browserify --save-dev`
`npm install stream-browserify`
Launching:
`npm run build`  // do this everytime you make changes
`npm run dev`
`npm start`
## Using github
Working from dev and merging to main
- `git push origin dev`
- `git checkout main`
- `git pull origin main`
- `git merge dev`
Accidentally working in main and having to merge to dev:
- `git add`... (make sure to update what you did first or there will be a conflict)
- `git checkout dev`
- `git pull origin dev`
- `git merge main` 

## Steps to complete for learning
This repo is for re-learning basic javascript so I can move on to React and Angular once I am more comfortable with the basic systax and setup.

### Node JS Express Build with Webpack
1. Initial setup install and folder trees



### Vanila JS
1. HTML and js working to get user data from a form and add it to the model.
- Models need to use `export class User {}` to make the object accessable
- Scripts need to import this object using `import { User } from './userModel.js'` to make this accessable 
- HTML needs to use `<script type="module" src="scripts.js"></script>` to make this accessable 
- This is different when using webpack 
2. Send the user to the API and get results back using fetch
- astrology api throws a cors error, vanila JS will not work now moving to Express and Webpack
3. Rebuild with express and webpack
