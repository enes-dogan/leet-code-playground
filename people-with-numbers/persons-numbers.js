const peopleWithNumbers = [
  { name: 'Joe', numbers: [1, 2, 3] },
  { name: 'John', numbers: [4, 5, 6] },
  { name: 'Jason', numbers: [7, 8, 9] },
  { name: 'Mike', numbers: [10, 11, 12] },
];
// time complexity O(n^2)
function personsNumbers(peopleNumsArr) {
  const peopleMap = new Map();
  for (const person of peopleNumsArr) {
    peopleMap.set(person.name, person.numbers);
  }

  for (const [name, numbers] of peopleMap) {
    for (const number of numbers) {
      console.log(`Name = ${name}, Number = ${number}`);
    }
  }
}

personsNumbers(peopleWithNumbers);

function personsNumbers2(peopleNumsArr) {
  peopleNumsArr.forEach((person) => {
    const numbersIndex = person.numbers.length;
    for (let i = 0; i < numbersIndex; i++) {
      console.log(`Name = ${person.name}, Number = ${person.numbers[i]}`);
    }
  });
}

personsNumbers2(peopleWithNumbers);

// another solution

function personsWihtNumbers(peopleArr) {
  peopleArr.forEach((person) => {
    const numbersIndex = person.numbers.length;
    for (let i = 0; i < numbersIndex; i++) {
      console.log(
        'Name = '.concat(person.name, ', Number = ').concat(person.numbers[i])
      );
    }
  });
}

personsWihtNumbers(peopleWithNumbers);
