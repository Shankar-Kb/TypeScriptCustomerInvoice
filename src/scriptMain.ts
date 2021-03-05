import {Customer, customerConfig} from "./customerClass";
import {Invoice, invoiceConfig} from "./invoiceClass";
import {Account, accountConfig} from "./accountClass";

let objCustomer = {ID: 1, name: 'John', discount: 5};
let objInvoice = {ID: 1, amount: 500};
let objAccount = {ID: 1, balance: 1500};

let customerOne = new Customer(objCustomer);
console.log(customerOne.toString());

let invoiceOne = new Invoice(objInvoice, objCustomer);
console.log(invoiceOne.getCustomer());

let accountOne = new Account(objAccount, objCustomer);
console.log(accountOne.toString());

accountOne.withdraw(2000);

