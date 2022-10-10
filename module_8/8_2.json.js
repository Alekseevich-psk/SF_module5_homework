const jsonString = `
{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}
`;

const list = JSON.parse(jsonString).list;

const res = {};
res.list = [];

list.forEach(element => {
    element.age = Number(element.age);
    res.list.push(element);
});

console.log(res);