function Gadget(trademark, price, age) {
    this.trademark = trademark,
    this.price = price,
    this.age = age
}

Gadget.prototype.workStatusCompany = function (params) {
    console.log(`Work status company - ${params}`);
}

function HomeAppliances (height, trademark, price, age) {
    this.height = height;
    this.trademark = trademark,
    this.price = price,
    this.age = age
}

HomeAppliances.prototype = new Gadget();

HomeAppliances.prototype.workStatusCompany = function (params) {
    console.log(`Work status company - ${params}, age home appliances - ${this.age}`);
}


const phone = new Gadget('Nokia', 9800, 2000);
const fridge = new HomeAppliances(1700, "LG", 3200, 2004);

phone.workStatusCompany('work');
fridge.workStatusCompany('work');
