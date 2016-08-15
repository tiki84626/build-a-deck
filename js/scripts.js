$(document).ready(function() {
  var deckRanks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  var deckSuits = ['clubs', 'hearts', 'spades', 'diamonds'];
  var deckList = document.getElementById('deck-list');
  var deck = [];

  deckRanks.forEach(function(deckRank) {
    deckSuits.forEach(function(deckSuit) {
      deck.push(deckRank + " of " + deckSuit);
    });
  });

  deck.forEach(function(card) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(card));
    deckList.appendChild(entry);
  });
});
