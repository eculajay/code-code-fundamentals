// 1. String: substr()
  function firstWord (){
    let str1 = 'See and stop';
    return str1.substring(0,3);
  }
  console.log(firstWord()); 

// 2. String: replace()
  function normalize() {
    let dates = '20 - 05 - 2017';
    return dates.replace(/-/g, '/');

  }
  console.log(normalize());

// 3. Increment 
  let x = 3;
  x++;
  x = x * 2;
  x--;
  console.log(x)

// 4. Fahrenheit 
  function toFahrenheit(celsius) {
      return 1.8 * celsius + 32;
  }
  console.log(toFahrenheit(0))


// 5. Boolean 
  function nand(y, z) {
      let and = y && z;
      return !and;
  }
  console.log(nand())
