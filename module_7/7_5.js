class Gadget {
    constructor(trademark, price, age) {
        (this.trademark = trademark), (this.price = price), (this.age = age);
    }

    workStatusCompany(params) {
        console.log(`Work status company - ${params}`);
    }
}

class HomeAppliances extends Gadget {
    workStatusCompany(params) {
        console.log(`Work status company - ${params}, age home appliances - ${this.age}`);
    }
}

const phone = new Gadget("Nokia", 9800, 2000);
const fridge = new HomeAppliances(1700, "LG", 3200, 2004);

phone.workStatusCompany("work");
fridge.workStatusCompany('work');