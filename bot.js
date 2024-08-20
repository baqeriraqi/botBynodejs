const TelegramBot =require('node-telegram-bot-api');
const axios = require('axios');
const token = '7262239454:AAGVbUS5jnjhxqj2TW1M9XhhwVKg1SGoB90';

const bot = new TelegramBot(token, {polling: true});
bot.onText("/start",function(msg){
bot.sendMessage(msg.chat.id,"Send the country name correctly\n")


})

bot.on("message",function(msg){
  if(msg.text!="Send the country name correctly\n")
    axios.get("https://restcountries.com/v3.1/name/"+msg.text)
      .then(function (response) {
    names=response.data
    // let jsonString=JSON.stringify(names.capital)
for(country of names)
            bot.sendPhoto(msg.chat.id,country.flags.png,{caption :` name :${country.name.common} \ncapital: ${country.capital}\nofficial: ${country.name.official}\n languages: ${country.languages.ara}`})
        }) .catch(function (error) {
          bot.sendMessage(msg.chat.id,"no things")

        })

   

})
