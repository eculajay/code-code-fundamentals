// 1. String: substr()
  function firstWord (){
    let str1 = 'See and stop';
    return str1.substring(0,3);
  }
  console.log(firstWord()); 

// 2. String: replace()
  function normalize() {
    let dates = "20 - 05 - 2017";
    return dates.replace(/-/g, "/");

  }
  console.log(normalize())
