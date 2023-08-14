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

    // Handle potential edge cases:
    // In case the properties of the person object change
    person.name = "Jane Doe"; // Example modification

    // In case the elements of the players array change
    players.push("Sam"); // Example modification

    // Print the results to verify
    console.log("Original players:", players);
    console.log("Original person:", person);
    console.log("team:", team);
    console.log("team1:", team1);
    console.log("cap1:", cap1);



