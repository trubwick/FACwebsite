
const funFacts = [
    "Ben once participated in a racing driver talent show. He did not win and so did not retire to a yacht in Monaco.",
    "Whilst volunteering in Fiji, he came face-to-face with an eagle whilst on the toilet.",
    "Ben once had a singing lesson with Pavarotti's voice coach, who concluded that Ben \"could not sing\"",
    "Ben brews his own beer - his favourite is a chocolate marshmallow stout",
    "Ben has a winning strategy for Mario Kart that he only shared with one other person...",
    "Without fail, he always forgets to shut cupboard doors, much to the chagrin of his wife",
    "He is an award-winning dancer, having won 'Best Disco Dancer' at the Haven holiday camp in Aberystwyth when he was 7.",
    "Ben has, officially and undisputably, the best dog in the world, Maggie, a setter-pointer cross.",
    "Has walked the entire length of CERN's Large Hadron Collider at least twice. He may or may not have found several other dimensions.",
    "He has a masters degree in Tunnelling and Underground Space. Because, why not?",
    "Ben is a certified PADI Advanced Open Water diver",
    "Ben once made a board game called 'Pitcoin', which can be bought at no good retailers"
]

var currentFunFact = "";

// Pulls a random quote from a list a returns to website
function generateFunFact () {
    
    //Generate random number (.floor ensures < arr.length)
    let i = Math.floor(Math.random() * funFacts.length);
    
    // Assign fact into variable
    var newFunFact = funFacts[i];

    // This makes sure that facts aren't repeated
    if (newFunFact !== currentFunFact) {
        document.getElementById("fun-fact").innerHTML = newFunFact;
        currentFunFact = newFunFact;
    } else {
        generateFunFact();
    }
}