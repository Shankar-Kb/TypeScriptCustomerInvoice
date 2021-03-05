import {Customer, customerConfig} from "./customerClass";

export class Invoice extends Customer{
    ID: number;
    customer: string;
    amount: number;
    
    constructor(invoiceData: invoiceConfig, customerData: customerConfig){
        super(customerData);
        this.ID = invoiceData.ID;
        this.customer = customerData.name;
        this.amount = invoiceData.amount;
    }
    getID(): number{
        return this.ID;
    }
    getCustomer(): string{
        return this.customer;
    }
    setCustomer(customerNewName: string): void{
        this.customer = customerNewName;
    }
    getAmount(): string{
        return this.amount.toString();
    }
    setAmount(amountValue: number): void{
        this.amount = amountValue;
    }
    getAmountAfterDiscount(): number{
        return this.amount - this.discount;
    }
}

export interface invoiceConfig{
   ID: number;
   amount: number;
}