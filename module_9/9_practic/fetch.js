fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

fetch("https://picsum.photos/v2/list/?limit=5")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

async function exampleFetch() {
    const response = await fetch('https://picsum.photos/v2/list/?limit=5');

    if (!response.ok) {
        throw new Error('Ответ сети был не ok.');
      }

    console.log(await response.text());
}

exampleFetch()
