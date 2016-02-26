alert('Let’s make a story together!')

var aColour = prompt('A colour (hot pink, indigo, etc.)');

var aCreature = prompt('A creature (gorilla, moth, etc.)');

var anAdjective = prompt('An adjective (ugly, stupendous)');

var aVerb = prompt('A past tense verb (painted, coded)');

var aStory = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning \nEnter the letter below:');

if (aStory = 'a') {
  document.write('After snacking on ' + anAdjective + ' treats, the ' + aColour + ' bellied ' + aCreature + ' ' + aVerb + ' for hours.')
}

if (aStory ='b') {
  document.write('Amelia ' + aVerb + ' through the ' + anAdjective + ' ' + aColour + ' nebula escaping the space ' + aCreature + '.')
}

if (aStory = 'c') {
  document.write('Jackson chose his ' + anAdjective + ' ' + aColour + ' ' + aCreature + ' card and ' + aVerb + ' it to the table knowing he won.')

}
