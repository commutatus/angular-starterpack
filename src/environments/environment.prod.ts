// The configuration in this file are used for the running the app on prod mode

export const environment = {
  hmr: false,
  production: true
};

// Staging API environment
export const staging = {
  ... environment,
  ... {
    api: 'YOUR-APIURL'
  },
};

// Prod API environment
export const prod = {
  ... environment,
  ... {
    api: 'YOUR-APIURL'
  }
};
