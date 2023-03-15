// 1. Count
function strCount(obj){
  let count = 0
  for (key in obj){
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count+= strCount(obj[key]);
  }
  
  return count
}

// 2. Get First & Last Array Element
Array.prototype.first = function() {
    return this[0];
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

// 3. Object Oriented Piracy 
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    this.isWorthIt = function() {
        return (this.draft - this.crew * 1.5) > 20;
    }
}
