const parser = new DOMParser();

const xmlString = `
        <list>
            <student>
                <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
                </name>
                <age>35</age>
                <prof>teacher</prof>
            </student>
            <student>
                <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
                </name>
                <age>58</age>
                <prof>driver</prof>
            </student>
        </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("list student");

const res = {};
res.list = [];

studentNode.forEach((element) => {
    const obj = {};
    obj.name = element.querySelector("first").textContent + " " + element.querySelector("second").textContent;
    obj.age = Number(element.querySelector("age").textContent);
    obj.prof = element.querySelector("prof").textContent;
    obj.lang = element.querySelector("name").getAttribute("lang");
    res.list.push(obj)
});

console.log(res);