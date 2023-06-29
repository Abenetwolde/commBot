const { Markup } = require("telegraf");

const getInvoice = (id) => {
  const invoice = {
    chat_id: id,
    provider_token: "CHAPUBK_TEST-vjZP3qdhMGcbCd43O7hz5zjsz41tJ8Oe",
    start_parameter: "get_access", //Уникальный параметр глубинных ссылок. Если оставить поле пустым, переадресованные копии отправленного сообщения будут иметь кнопку «Оплатить», позволяющую нескольким пользователям производить оплату непосредственно из пересылаемого сообщения, используя один и тот же счет. Если не пусто, перенаправленные копии отправленного сообщения будут иметь кнопку URL с глубокой ссылкой на бота (вместо кнопки оплаты) со значением, используемым в качестве начального параметра.
    title: "Привет YouTube",
    description: "YouTube",
    currency: "USD",
    prices: [
      { label: "Invoice Title", amount: 100 * 100 },
      { label: "Invoice Title", amount: 100 * 100 },
    ],
    payload: {
      unique_id: `${id}_${Number(new Date())}`,
      provider_token: "CHAPUBK_TEST-vjZP3qdhMGcbCd43O7hz5zjsz41tJ8Oe",
    },
  };

  return invoice;
};

const test = async (ctx) => {
  return ctx.replyWithInvoice(getInvoice(ctx.from.id)).catch((error) => {
    console.log("error keyboard", error);
  });
};

module.exports = (bot) => {
  bot.newCommand(
    { command: "sendinvoice", description: "SendData test" },
    test
  );
};
