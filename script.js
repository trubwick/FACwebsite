// ----- FUN FACTS SCRIPT
// Dear reader, I felt very smart here because I refactored the code twice, first to prevent consecutive repeats of the same fact and then again to make sure all facts are shown once before cycling #codingIsFun

// Define variables (outside of function)
var usedFacts = [];
const FUNFACTS = [
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

// Function occurs on click of 'fun-facts-button' in HTML document
function generateFunFact () {
 
    // Checks whether all facts have been used previously used and resets if true to prevent repeat or loop
    if (usedFacts.length === FUNFACTS.length) {
        usedFacts = []; 
    }

    // Generate random number (.floor ensures < arr.length)
    let i = Math.floor(Math.random() * FUNFACTS.length);

    // Check whether fact has been used this cycle and if not, push to website and tick up. If true, try again
    if (usedFacts.includes(i)) {
        generateFunFact();
    } else {
        var newFunFact = FUNFACTS[i];
        document.getElementById("fun-fact").innerHTML = newFunFact;
        usedFacts.push(i);
    }
}




// ----- PORTFOLIO MODAL (but may be used in portfolio later)

const PROJECTINFO = {
    name: [
        "CERN Digital Inspection Tool",
        "Stampede: Racing Royale",
        "High Speed 2"
    ],
    role: [
        "Product Manager",
        "Operations Manager",
        "Design Lead"
    ],
    description: [
        "blahblahblah",
        "blahblahblah",
        "blahblahblah"
    ],
    image: [
        "./images/CERN.jpg",
        "./images/stampede.jpg",
        "./images/hs2.jpg"
    ]
}