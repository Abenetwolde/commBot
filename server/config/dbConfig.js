if (process.env.MIGRATE_TOOL) {
  require("dotenv").config();
}

const {
  DEV_USERNAME,
  DEV_PASSWORD,
  DEV_DATABASE,
  DEV_HOST,
  DEV_PORT,
  DEV_DIALECT
} = process.env

const dev = {
  // database:"postgres://admin:YWv6TSuc1jyi4C3PPmrFKts1bf2R3wND@dpg-cibdviqip7vnjjjghncg-a.oregon-postgres.render.com/telegram_bot_30yo",
  //   username: "admin",
  // password: "YWv6TSuc1jyi4C3PPmrFKts1bf2R3wND",
 
  host: "dpg-cibdviqip7vnjjjghncg-a",
  port: 5432,
  dialect: "postgres",
  username: "postgres",
  password: "1234",
  database: "Telegram",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: (msg) => {
     console.log(msg);
  },
  define: { createdAt: false },
};

module.exports = { development: dev, test: null, production: false };
