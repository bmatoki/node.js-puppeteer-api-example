module.exports = {
  apps: [
    {
      name: 'puppeteer-api-example',
      script: 'app.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
        COMPANY: '{company_name_here}',
      },
    },
  ],
};
