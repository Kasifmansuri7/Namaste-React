    const data = [
    {
        id: 1,
        name: "John",
        info: '{"age": 30, "city": "New York"}',
    },
    {
        id: 2,
        name: "Alice",
        info: '{"age": 25, "city": "Los Angeles"}',
    },
    {
        id: 3,
        name: "Bob",
        info: '{"age": 35, "city": "Chicago"}',
    },
    ];

data.forEach((each) => (each.info = JSON.parse(each.info)));
// console.log("data: ", data);



