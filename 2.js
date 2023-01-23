function countMe(arr) {
    const result = {};
  
    for (const key of arr) {
      if (result[key] === undefined) {
        result[key] = 0;
      }
      result[key]++;
    }
  
    return result;
  }
  
  let inputArr = ["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"];
  console.log(countMe(inputArr));