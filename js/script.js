names = ["Yaakov", "John", "Jen", "jason", "paul", "paula", "laura", "frank",];
for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
    console.log("Good bye " + names[i])
  }
  else {
    console.log("Hello " + names[i])
  }
}