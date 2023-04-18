// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

class Reminder {
  static #reminder;

  constructor(message, interval) {
    if (Reminder.#reminder) return Reminder.#reminder;
    this.message = message;
    this.interval = interval;
    this.count = 0;
    this.timer = null;

    Reminder.#reminder = this;
  }

  set message(newMessage) {
    this.massage = newMessage;
  }
  get message() {
    return this.massage;
  }

  print() {
    this.timer = setInterval(() => {
      console.log(`${this.message}. Count ${++this.count}`);
    }, this.interval * 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

const message = new Reminder("Путин хуйло", 5);
console.log(message.print());
