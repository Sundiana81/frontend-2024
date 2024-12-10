const bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("The deposit amount must be greater than 0.");
        return;
      }
      this.balance += amount;
      console.log(`Deposited ${amount}. Current balance: ${this.balance}.`);
    },
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log("The withdrawal amount must be greater than 0.");
        return;
      }
      if (amount > this.balance) {
        console.log("Insufficient funds.");
        return;
      }
      this.balance -= amount;
      console.log(`Withdrew ${amount}. Current balance: ${this.balance}.`);
    },
  
    checkBalance() {
      console.log(`Current balance: ${this.balance}.`);
    }
  };
  
  // Example usage:
  bankAccount.deposit(150); // Deposited 1000. Current balance: 1000.
  bankAccount.withdraw(50); // Withdrew 500. Current balance: 500.
  bankAccount.checkBalance(); // Current balance: 500.
  