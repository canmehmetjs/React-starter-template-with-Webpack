/*
Config sub directory contains two plain .json files that defines the configuration values used in app. 
eg: base URL for api server, data refresh rate etc. 
based on environment index.js will return config.json accordingly. 

This part is subjective and depends on requirements. 
One can also use .env files for environment specific fields. 
Read more about this in create-react-app documentation.
*/
import prodConfig from './prod-config.json'
import devConfig from './dev-config.json'

export default (process.env.NODE_ENV === "production") ? prodConfig : devConfig;