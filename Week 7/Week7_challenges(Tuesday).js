// 1. Objects
function animal(obj){
  animal.name='dog';
  animal.legs='4';
  animal.color='White';
  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
}

// 2. Mistery
function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

// 3. rooms
var rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient',
        },
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water',
        },
    },
};


