export class Customer{
    ID: number;
    name: string;
    discount: number;

    constructor(customerData: customerConfig){
       this.ID = customerData.ID;
       this.name = customerData.name;
       this.discount = customerData.discount;
    }
    
    getID(): number{
        return this.ID;
    }
    getName(): string{
        return this.name;
    }
    getDiscount(): number{
        return this.discount;
    } 
    setDiscount(discountNew: number): void{
        this.discount = discountNew;
    }
    toString(): string{
        return `${this.name}(${this.ID})`;
    }
}

export interface customerConfig{
    ID: number;
    name: string;
    discount: number;
 }





