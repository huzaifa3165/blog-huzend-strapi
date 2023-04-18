// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      schema: env("DATABASE_SCHEMA"), // Not required
      ssl: env.bool("DATABASE_SSL", true),
    },
    debug: false,
  },
});

// ep-square-poetry-080752.us-east-2.aws.neon.tech
