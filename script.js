const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const team = players;

    // Task 2: Create a deep copy of the array players
    const team1 = players.slice();

    // Task 3: Create a deep copy of the object person
    const cap1 = JSON.parse(JSON.stringify(person));

