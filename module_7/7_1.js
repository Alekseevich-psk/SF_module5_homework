const obj = {
    name: "Andrew",
    age: 30,
};

printObj(obj);

function printObj(obj) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(key + " " + element);
        }
    }
}
