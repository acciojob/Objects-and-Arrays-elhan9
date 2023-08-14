const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
    // Task 1: Create a reference to the array players
    const team = players;

    // Task 2: Create a copy of the array players
    const team1 = [...players];

    // Task 3: Create a copy of the object person
    const cap1 = { ...person };
