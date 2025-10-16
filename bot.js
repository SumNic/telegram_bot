import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Привет! Открой моё WebApp:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚀 Открыть приложение", web_app: { url: process.env.URL_APP } }
        ]
      ]
    }
  });
});

bot.launch();
console.log("Бот запущен!");

