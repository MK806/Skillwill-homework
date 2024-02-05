// First task and second task together

function customReplace(inputString, valueToReplace, valueToReplaceWith) {

    const characters = inputString.split('');

    for (let i = 0; i < characters.length; i++) {
        if (characters.slice(i, i + valueToReplace.length).join('') === valueToReplace) {

            characters.splice(i, valueToReplace.length, ...valueToReplaceWith.split(''));
        }
    }

   
    return characters.join('');
}

// Example
const originalString = "Hello, world! Hello, Skillwill!";
const result = customReplace(originalString, "Hello", "Bonjur");
console.log(result);


// Third task


function capitalizeWords(sentence) {

    const words = sentence.split(' ');

    const capitalizedWords = words.map(word => {

        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    });

    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

// Example
const originalSentence = "We are learning React in Skillwill";
const result1 = capitalizeWords(originalSentence);
console.log(result1);



// Fourth task


function ageSort(users) {

    const sortedUsers = users.slice().sort((a, b) => a.age - b.age);

    return sortedUsers;
}

// Example
const users = [
    { name: "Mancho", age: 26 },
    { name: "Anano", age: 30 },
    { name: "Giorgi", age: 32 },
];

const sortedUsers = ageSort(users);
console.log(sortedUsers);


// Fifth and sisxth task together, using sort function

function sortByAge(users) {
   
    const sortedUsers = users.slice().sort((a, b) => a.age - b.age);

    return sortedUsers;
}

// Example 
const users1 = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
];

const sortedUsers1 = sortByAge(users);
console.log(sortedUsers);





