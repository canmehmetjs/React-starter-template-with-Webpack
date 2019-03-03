# React starter template with Webpack

This repo is still on working process, It's only a personal project. 

## Includes
Axios, Redux, React-Router, Sass Loader, Webpack etc.

## Installation

Use yarn to install this repo

```bash
yarn install
```

## Test Webpack

```bash
yarn webpack
```

## Run in development mode

```bash
yarn start
```

## Generate router path automatically.


```bash
yarn generate jobs -r applied-jobs
 
```
generate (file_name) -r (route-name)

Then generated files will be placed in this folders : 

Views 
* Views / jobs
   * actions.js
   * index.js 
   * jobs.js
   * jobs.css
   * reducer.js

* app/reducers.js - 

```python
import jobsReducer from '../views/jobs/reducer'

export const reducers = combineReducers({
  jobs: jobsReducer
});
 
```
* app/routes.js

```python
import Jobs from '../views/jobs'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path='/applied-jobs' component={Jobs}/>
     
    </Switch>
  );
}
 
```
## License
[MIT](https://choosealicense.com/licenses/mit/)