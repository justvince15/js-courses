// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    if (type === Transaction.DEPOSIT) {
      this.balance = this.getBalance() + amount;
    } else {
      // type === Transaction.WITHDRAW
      this.balance = this.getBalance() - amount;
    }
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `Невозможно снять ${amount} - недостаточно средств. Баланс - ${this.getBalance()}`,
      );
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;
    this.transactions.forEach(transaction => {
      if (transaction.type === type) {
        transactionTotal += transaction.amount;
      }
    });
    return transactionTotal;
  },
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(account.getBalance()); // 0
account.withdraw(100); // Невозможно снять 100 - недостаточно средств. Баланс - 0
account.deposit(1000);
console.log(account.getBalance()); // 1000
account.withdraw(100);
console.log(account.getBalance()); // 900
account.withdraw(1000); // Невозможно снять 1000 - недостаточно средств. Баланс - 900
console.log(account.getBalance()); // 900
account.deposit(2000);
account.deposit(3000);
account.deposit(4000);
account.deposit(5000);
console.log(account.getBalance()); // 14900
console.log(account.getTransactionTotal('deposit')); // 15000
console.log(account.getTransactionTotal('withdraw')); // 100
console.log(account.getTransactionDetails(3)); // {id: 3, type: "deposit", amount: 2000}
