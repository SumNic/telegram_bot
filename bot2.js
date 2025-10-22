import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN_RODNAYA_PARTYA);

bot.start((ctx) => {
  ctx.reply("Здравия, Учредитель Родной партии!", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚀 Открыть приложение", web_app: { url: process.env.URL_APP_RODNAYA_PARTYA } }
        ]
      ]
    }
  });
});

bot.launch();
console.log("Бот запущен!");

