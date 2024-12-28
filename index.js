const TelegramApi = require('node-telegram-bot-api')

const token = '7627363308:AAH7MHnnbvHyFIxV9kXFBYgkXtMN5AbEfVI'

const bot = new TelegramApi(token, {polling: true})

const fontsButtons = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '【E】【x】【a】【m】【p】【l】【e】 / 【П】【р】【и】【м】【е】【р】', callback_data: '1'}],
            [{text: 'E̳x̳a̳m̳p̳l̳e̳ / П̳р̳и̳м̳е̳р̳', callback_data: '2'}],
            [{text: 'Example / ከየሀጠይየ(Только русский)', callback_data: '3'}],
            [{text: 'ꈼꇒꁲꂵꉣ꒒ꈼ / ꊮꉣꈤꂵꂅꉣ', callback_data: '4'}],
            [{text: 'Example / ᑎᖘᑌᗰᙓᖘ(Только русский)', callback_data: '5'}],
            [{text: 'Example / ᚢᚹᛋᛖᛊᚹ(Только русский)', callback_data: '6'}],
            [{text: 'ᴇxᴀᴍᴘʟᴇ / ᴨᴩиʍᴇᴩ', callback_data: '7'}],
            [{text: 'E̶x̶a̶m̶p̶l̶e̶ / П̶р̶и̶м̶е̶р̶', callback_data: '8'}],
            [{text: 'E̲x̲a̲m̲p̲l̲e̲ / П̲р̲и̲м̲е̲р̲', callback_data: '9'}],
            [{text: '『E』『x』『a』『m』『p』『l』『e』 / 『П』『р』『и』『м』『е』『р』', callback_data: '10'}],

        ]
    })
}


bot.setMyCommands([ //меню
    {command: '/devinfo', description: 'Информация о разработчиках.'},
    {command: '/fonts', description: 'Шрифты'}
])


bot.on('message', async msg => { //Команды
    const text = msg.text;
    const chatId = msg.chat.id;


    if (text === '/devinfo')
        return bot.sendMessage(chatId, 'Информация о разработчиках.' +
            ' Команда Keshix: @Lolowix, @herheshe4ka');

    if (text === '/ping') {
        return bot.sendMessage(chatId, 'pong!');
    }

    if (text === '/start') {
        return bot.sendMessage(chatId,
            'Бот был запущен. Я Кеша и я позволяю вам качать шрифты, а также вы можете играть в игры (полный список возможностей вы найдете, если напишите команду /commands) Если вам не жалко, в описании есть бусти, подарите мне деняжку на зерно в кормушку!')
    }
    if (text === '/commands') {
        return bot.sendMessage(chatId, 'команды ' +
            '/ping - Просто команда, ' +
            '/devinfo - Информация о разработчиках, ' +
            '/fonts - Шрифты')
    }
    if (text === '/fonts') {
        return bot.sendMessage(chatId, 'Выбери шрифт', fontsButtons);
    }

    return bot.sendMessage(chatId, 'Неизвестная команда')// неиавыавапвапрвпрапр

})

bot.on('callback_query', msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    bot.sendMessage(chatId, `На данный момент, наш бот в альфа тесте, поэтому у нас эта функция еще не работает. Это не реклама, но вот сайт, с которого мы брали шрифты https://textgenerator.ru . Кстати, мы знаем, что ты нажал на ${data} кнопку`)



    console.log(msg);
})

bot.on('message', async msg => { //тут логи
    console.log(msg);
})
