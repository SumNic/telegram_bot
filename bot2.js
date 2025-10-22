import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.rodnaya_partya_bot.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Здравия, Учредитель Родной партии!", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🚀 Открыть приложение", web_app: { url: process.env.rodnaya_partya_bot.URL_APP } }
        ]
      ]
    }
  });
});

bot.launch();
console.log("Бот запущен!");

