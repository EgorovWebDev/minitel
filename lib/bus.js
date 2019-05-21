export class Bus {
  constructor () {
    this.subscribers = {}
    this.idToChanel = {}
  }

  static genId () {
    return Math.floor(Math.random() * 100000000000)
  }

  subscribe (chanel, callback) {
    // Если не было попдписок на chanel создаем пустой массив
    if (!(chanel in this.subscribers)) {
      this.subscribers[chanel] = []
    }

    // Генерируем идентификатор по которому мы можем в дальнейшем удалить подписку
    const id = Bus.genId()

    // Формируем объект подписки на канал
    const subscription = {
      id: id,
      callback: callback
    }

    // Связь для быстрого поиска канала
    this.idToChanel[id] = chanel

    // Регистрируем подписку
    this.subscribers[chanel].push(subscription)

    return id
  }

  unsubscribe (subscriptionId) {
    // Проверяем наличие подписки
    if (!(subscriptionId in this.idToChanel)) {
      return false
    }
    // получаем название канала
    const chanel = this.idToChanel[subscriptionId]
    // получаем подписку для канала
    const subscription = this.subscribers[chanel].find(s => s.id === subscriptionId)

    if (subscription) {
      // оставляем все подписки кроме найденой
      this.subscribers[chanel] = this.subscribers[chanel].filter(s => s !== subscription)
    }

    // удаляем связь для быстрого поиска
    delete this.idToChanel[subscriptionId]

    return true
  }

  send (chanel, message) {
    if (chanel in this.subscribers) {
      // проход по всем подпискам канала и отправка сообщения
      for (const subscription of this.subscribers[chanel]) {
        subscription.callback(message)
      }
    }
  }
}
