require("dotenv").config();
const { Router } = require("express");
const app = require("./config/express")();
const { Telegraf } = require("telegraf");

const { loader, sleep } = require("./utils");
const { commands } = require("./utils/telegrafProto");
const ws = require("./webSocket");

const bot = new Telegraf("6343517140:AAGlOhiGW0r41gJiwQ8Gn6pneQ0Bovegi48");

// typeof ws === "function" && ws(app, bot);

loader({ path: "./commands", type: "Bot command" }, bot);
loader(
  { path: "./controllers", type: "Express controller" },
  bot,
  (moduleName) => {
    const router = Router();
    app.use(`/api/${moduleName}`, router);
    return router;
  }
);

bot.telegram.setMyCommands(commands);
bot.command("/ab", async (ctx) => {
  await ctx.replyWithInvoice({
    title: "Test Product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    payload: `${ctx.message?.from.id}-${ctx.me.id}-${
      ctx.message?.message_id
    }-${new Date().toISOString()}`,
    provider_token: "6141645565:TEST:MHeGovoNnMWxmSOna3Yc",
    currency: "ETB",
    prices: [{ label: "Test Product", amount: 100 * 100 }],
    max_tip_amount: 100 * 100,
    suggested_tip_amounts: [5 * 100, 10 * 100, 25 * 100, 50 * 100],
    photo_url: "https://via.placeholder.com/300/09f/fff.png",
  });
});
bot.use(async(ctx, next) => {
  // console.log(ctx);
  await next();
});

bot.on("pre_checkout_query", async(ctx, test) => {
  // console.log("payment", ctx.update.pre_checkout_query);
  await ctx.answerPreCheckoutQuery(true);
});

bot.catch(console.log);
bot.launch();
// Set up CORS options

app.listen(4000);
