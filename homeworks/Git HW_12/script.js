/*Задание 1
Создать объект bankAccount (DEBIT CARD), который:

accountNumber: "123456789"
accountHolderName: "Alice"
balance: 0
deposit(sum) { TODO Пополнение счёта }
withdraw(sum) { TODO Списание счёта }
checkBalance() { ODO Просмотр баланса счёта }

*/

let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,
  
    deposit: function (sum) {
      this.balance += sum;
    },
  
    withdraw: function (sum) {
      if (this.balance >= sum) {
        this.balance -= sum;
      } else {
        console.log(
          `Account number: ${this.accountNumber} has insufficient funds`
        );
      }
    },
  
    checkBalance: function () {
      console.log(
        `Account number: ${this.accountNumber}, Balance: ${this.balance}`
      );
    },
  };
  
  bankAccount.deposit(1000);
  bankAccount.checkBalance();
  bankAccount.withdraw(500);
  bankAccount.checkBalance();
  bankAccount.withdraw(501);
  
  //! Создаю массив аккаунтов и пробую прикрутить к html.
  // Делаю массив с акками.
  
  let bankAccounts = [
    {
      accountNumber: "AA345678",
      accountHolderName: "Alice",
      balance: 0,
  
      deposit: function (sum) {
        this.balance += sum;
      },
  
      withdraw: function (sum) {
        if (this.balance >= sum) {
          this.balance -= sum;
        } else {
          console.log(
            `Account number: ${this.accountNumber} has insufficient funds`
          );
        }
      },
  
      checkBalance: function (outputElement = null) {// выводим баланс не просто в консоль а в переменную которую в дальнейшем вставим в дисплей
          const balanceInfo = `Account number: ${this.accountNumber}, Balance: ${this.balance}`;
          console.log(balanceInfo);
    
          if (outputElement) { //по умолчанию не срабатывае, но если в аргументах приходит значение выводиться консоль лог
            outputElement.textContent = balanceInfo;
          }
        }
    },
  
    {
      accountNumber: "AB764353",
      accountHolderName: "Jack",
      balance: 0,
  
      deposit: function (sum) {
        this.balance += sum;
      },
  
      withdraw: function (sum) {
        if (this.balance >= sum) {
          this.balance -= sum;
        } else {
          console.log(
            `Account number: ${this.accountNumber} has insufficient funds`
          );
        }
      },
  
      checkBalance: function (outputElement = null) { 
          const balanceInfo = `Account number: ${this.accountNumber}, Balance: ${this.balance}`;
          console.log(balanceInfo);
    
          if (outputElement) {
            outputElement.textContent = balanceInfo;
          }
        }
    },
  
    {
      accountNumber: "CC764539",
      accountHolderName: "Don",
      balance: 0,
  
      deposit: function (sum) {
        this.balance += sum;
      },
  
      withdraw: function (sum) {
        if (this.balance >= sum) {
          this.balance -= sum;
        } else {
          console.log(
            `Account number: ${this.accountNumber} has insufficient funds`
          );
        }
      },
  
      checkBalance: function (outputElement = null) {
        const balanceInfo = `Account number: ${this.accountNumber}, Balance: ${this.balance}`;
        console.log(balanceInfo);
  
        if (outputElement) {
          outputElement.textContent = balanceInfo;
        }
      }
    },
  ];
  
  //Добавляем обработчики событий навешивая функции на кнопки и поле дисплей.
  
  //Депозит
  
  const depositButton = document.querySelector(".deposit");
  
  depositButton.addEventListener("click", (event) => {
    event.preventDefault(); //чтобы страница не перезагружалась убиваем базовую функцию кнопки
  
    //получение значений
    const accountNumber = document.querySelector("#account").value; //ищем поле куда пользователь пишет номер счета
    const depositAmount = parseFloat(document.querySelector("#deposit").value); //ищем поле куда пользователь пишет сумму на депозит
    //parseFloat(...): превращает введенную строку в число с плавающей запятой. Это важно, чтобы работать с числами, а не с текстом.
  
    //находим акк по номеру.Если такой аккаунт найден, переменная account будет ссылаться на объект этого аккаунта.
    const account = bankAccounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
  
    account.deposit(depositAmount); //закидываем на счет
  });
  
  // Снятие. Почти также как с депозитом
  const withdrawButton = document.querySelector(".withdraw");
  withdrawButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const accountNumber = document.querySelector("#account").value;
    const withdrawAmount = parseFloat(document.querySelector("#withdraw").value);
  
    const account = bankAccounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
    account.withdraw(withdrawAmount);
  });
  
  //Выводим баланс в поле дисплей
  const checkButton = document.querySelector(".check");
  const displayDiv = document.querySelector(".display"); // Находим div для отображения результата
  
  checkButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const accountNumber = document.querySelector("#account").value;
  
    const account = bankAccounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
  
    account.checkBalance(displayDiv); //вызываем метод чекбаланс для выбранного аккаунта и выводим в дисплей див(наш дисплей)
  });
  
  //Работа кнопки Reset
  const resetButton = document.querySelector(".reset");
  
  resetButton.addEventListener("click", () => {
      
      document.querySelector("#account").value = "";
      document.querySelector("#name").value = "";
      document.querySelector("#deposit").value = "";
      document.querySelector("#withdraw").value = "";
  
      
      displayDiv.textContent = "";
  });