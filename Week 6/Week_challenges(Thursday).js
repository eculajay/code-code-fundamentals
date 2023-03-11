// 1. Strings
function greet(name) {
    return 'Hello ' + name + '!';
    }
    console.log(greet('Edison'));
    
    
// 2. String: length
    //strings 1
    let name1 = 'Edison'
    console.log('The name '+name1+ ' has '+name1.length+' characters');
    
    //strings 2
    function length(word1){
        return 'The amount of caracters is: ' + word1.length;
    }
    console.log(length("Hello mundo!"));
    
    //strings 3
    function length(letter1) {
        return 'The amount of characters of the second string is: ' + letter1.length;
    }
    console.log(length("Sun"));
    

// 3. String: toUpperCase()
    let str = "Mthatha";
    function toCase(str) {
        return str.toLowerCase() + '-' + str.toUpperCase();
      } 
    // 2 
    function toCase(Ma) {
        return Ma.toLowerCase() + "-" + Ma.toUpperCase()
    }
    console.log(toCase("Mthatha"))
    
// 4. String: charAt()
    let s1 = 'Amnesty'.charAt(0);
    let s2 = 'International'.charAt(0);
    function shortcut(s1, s2){
        return s1+s2;
    }
    console.log(shortcut(s1,s2)); // Expected output: "AI"


// 5. String: indexOf()
    let greet1 = "Hola ciao";
    console.log(greet1.indexOf('ciao'));
    // 2
    function indexOfIgnoreCase(c1, c2) {
    let c1Lower = c1.toLowerCase();
    let c2Lower = c2.toLowerCase();
        return c1Lower.indexOf(c2Lower);
    }
    console.log(indexOfIgnoreCase("Here comes", "the sun"))
