ng-simple
=========

This project aims to kick start simple angular.js projects, includes ES6 and SASS support.

## How to Use

First clone the repo and jump to the project directory

```bash
git clone git@github.com:vngrs/ng-simple.git yourprojectname
```
```bash
cd yourprojectname
```

Then remove the .git folder

```bash
rm -rf .git
```

Then install the dependencies

```bash
npm install
```
```bash
bower install
```

And finally run the gulp task to start development server

```bash
gulp server
```

Then open the project in your browser with the url: ```http://localhost:8080/```

## Deployment
```gulp deploy``` command will bundle whole project files into ```'/dist'``` directory.

You can use different environment settings like production, staging etc. If you
want to deploy for a specific environment use this command:

```
NODE_ENV=production gulp deploy
```