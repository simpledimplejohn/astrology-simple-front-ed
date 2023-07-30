# Simple Front End API
this is a simple build of the front end API for astrology that will not use a framework

## Build
Using npm 
`npm init -y` for setup
Use shift alt F to auto format vs code

This added to the package.json:
`  "scripts": {`
    `"start":"node index.js"`

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
### Vanila JS
1. HTML and js working to get user data from a form and add it to the model.
- Models need to use `export class User {}` to make the object accessable
- Scripts need to import this object using `import { User } from './userModel.js'` to make this accessable 
- HTML needs to use `<script type="module" src="scripts.js"></script>` to make this accessable 
- This is different when using webpack 
2. Send the user to the API and get results back using fetch