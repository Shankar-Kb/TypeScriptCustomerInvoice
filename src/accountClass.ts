import {Customer, customerConfig} from "./customerClass";

export class Account extends Customer{
    ID: number;
    customer: string;
    balance: number;
    
    constructor(accountData: accountConfig, customerData: customerConfig){
        super(customerData);
        this.ID = accountData.ID;
        this.customer = customerData.name;
        this.balance = +accountData.balance.toFixed(2);
    }
    getID(): number{
        return this.ID;
    }
    getCustomer(): string{
        return this.customer;
    }
    getBalance(): number{
        return this.balance;
    }
    setBalance(balanceNewValue: number): void{
        this.balance = balanceNewValue;
    }
    toString(): string{
        return `${this.customer}(${this.ID}) balance=$${this.balance.toFixed(2)}`;
    }
    getCustomerName(){
        return this.name;
    }
    deposit(amountNewValue: number): void{
        this.balance += amountNewValue;
    }
    withdraw(amountToDeduce: number): void{
        if(this.balance > amountToDeduce) this.balance -= amountToDeduce;
        else console.log('Amount to withdraw exceeds the current available balance');
    }
}

export interface accountConfig{
    ID: number;
    balance: number;
}