module.exports = ({ env }) => ({
  // host: env("HOST", "147.182.188.52"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  url: env("PUBLIC_URL", "https://siccic.com/backend/"),
  // url: env("PUBLIC_URL", "http://147.182.188.52/backend/"),
});
