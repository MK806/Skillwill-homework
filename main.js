// First task

function findNumbers(n, ...numbers) {
    if (n <= 2 || n % 2 === 0) {
      throw new Error("Please provide a valid number greater than 2");
    }
  
    const sumTwoNumber = numbers[0] + numbers[1];
    const remainingNumbers = numbers.slice(2).reduce((acc, num) => acc * num, 1);
  
    return [sumTwoNumber, remainingNumbers];
  }

  // Example
  
  const result = findNumbers(9, 3, 5, 9, 5, 8)
  console.log(result)
  


  //Second task

  function getCity(user) {
    const { banks } = user;

    if (Array.isArray(banks) && banks.length >= 3) {
      const { address: { city } = {} } = banks[2];
      return city;
    }

    return undefined;
  }
  
  //Example

  const userObject = {
    banks: [
      {},
      {},
      {
        address: {
          city: "Batumi"
        }
      }
    ]
  };
  
  const city = getCity(userObject);
  console.log(city); 



  // Third task

function copyObj(originalObj) {
  return { ...originalObj }
}


// Example
const inputObj = {
  value1: "First",
  value2: "Second",
  value3: [5, 8, 4],
};

const copiedObj = copyObj(inputObj)
console.log(copiedObj)

  
// Fourth task

function deepCopy(originalObj) {

    if (typeof originalObj === 'object' && originalObj !== null) {

      const copiedObj = Array.isArray(originalObj) ? [] : {};
  
      for (const key in originalObj) {

        copiedObj[key] = deepCopy(originalObj[key]);
      }
  
      return copiedObj;
    } else {
      return originalObj;
    }
  }
  
  // Example
  const inputObject = {
    keyValue1: "First",
    keyValue2: "Second",
    keyValue3: {
      nestedKey: "Value3",
      nestedArray: [2, 9, 5]
    },
    keyValue4: [7, 9, 5]
  };
  
  const copiedObject = deepCopy(inputObject);
  
  console.log(copiedObj);


  // FIfth task

  function prototypeObj(originalObject) {
    return { ...originalObject };
  }
  
  // Example
  const inputObject1 = {
    key1: "First",
    key2: "Second",
    key3: {
      nestedKey: "third value",
      nestedArray: [9, 8, 7]
    },
    key4: [6, 5, 4]
  }
  
  const copiedObject1 = prototypeObj(inputObject1);
  
  console.log(copiedObject1);
  
  