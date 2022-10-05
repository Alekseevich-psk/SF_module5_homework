const map = new Map();
map.set("Andrew", "name");
map.set(30, "age");
map.set(true,"webdev");

for ( let item  of map){
    console.log(`key - ${item[0]}, value - ${item[1]}` )
}