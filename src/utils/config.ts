import Constants from 'expo-constants';


export const prodUrl = "https://marvelqlous.vercel.app/api/graphql";

enum appEnv {
    dev = "dev",
    stg = "staging",
    prd = "prod"
}

type appConfig = {
    env: string,
    debug: boolean,
    apiUrl: string,
    app?: any
}

const configObj = {
  dev: {
    debug: true,
    apiUrl: "http://localhost:3000",
    env: "dev"
  },
  staging: {
    debug: false,
    apiUrl: prodUrl,
    env: "staging"

  },
  prod: {
    debug: false,
    apiUrl: prodUrl,
    env: "prod"
  }
};

const getEnvVars = (env: appEnv = appEnv.dev) : appConfig => {
    
  return configObj[env];
}

export const getConfig = ():appConfig => getEnvVars(Constants.manifest.releaseChannel)