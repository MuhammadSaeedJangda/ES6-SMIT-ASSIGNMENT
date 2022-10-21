class PersonAccount {

    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    totalincome() {
        console.log(`${this.firstName} ${this.lastName} Incomes `)
        console.log(this.incomes);
    }

    totalExpense() {
        console.log(`${this.firstName} ${this.lastName} Expenses `)
        console.log(this.expenses);
    }
    
    addIncome() {
        console.log(`${this.firstName} ${this.lastName} addIncome `)
        console.log(this.addIncome);
    }

     addExpense() {
        console.log(`${this.firstName} ${this.lastName} addExpense `)
        console.log(this.addExpense);
    }
    
    accountBalance() {
        console.log(`${this.firstName} ${this.lastName} accountBalance `)
        console.log(this.accountBalance);
    }

}
expenses = [
    {
        expensess: "ABC",
        expernseDescriptions: "User Expense",
    }

];

incomes = [
    {
        Incomes: "50000",
        description: "User Incomes",
    }
];


// Usage:
let user = new PersonAccount("abc","cdf",incomes,expenses);
//user.totalincome();
//user.totalExpense();


