var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
var alphName = people.sort();
console.log(alphName);
var NameLen = people.sort(function(element1, element2) {
  return element1.length - element2.length;
})
console.log(NameLen);

