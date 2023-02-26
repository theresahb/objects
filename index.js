// Question 1
function InstagramPost(handle, content, imageLink, views, likes) {
    this.handle = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
}


// Question 2
// first Instagram post 
const post1 = new InstagramPost(
    "theresahb",
    "Just do it",
    "https://instagram.com/just-pic.jpg",
    1500,
    527
);
  
// second Instagram post 
const post2 = new InstagramPost(
    "bbcnews",
    "Mauna Loa has erupted for the first time in almost 40 years.",
    "https://instagram.com/volcano-pic.jpg",
    310504,
    115680
);



// Question 3(a)
// factory function to create person object
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    };
}

// Question 3(b)
// factory function to create JAMB scores object
function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
}
  
// Musa's person object
const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

// Musa's JAMB scores object
const musaJambScores = createJambScores(70, 85, 82, 94);

// adding Musa's JAMB scores object as a property to his person object
musa.jambScores = musaJambScores;



// Question 4
const obj1 = { a: 1, b: 2 };
const clone1 = Object.create(obj1);
console.log(clone1); 
console.log(clone1.a); 
console.log(clone1.b); 

const obj2 = { a: 1, b: 2, c: 3 };
const clone2 = Object.assign({}, obj2);
console.log(clone2); 

const obj3 = { a: 1, b: 2, c: 3 };
const clone3 = { ...obj3 };
console.log(clone3); 

const obj4 = { a: 1, b: { c: 2 } };
const clone4 = JSON.parse(JSON.stringify(obj4));
console.log(clone4); 


// Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (let party in presidentialCandidates) {
    console.log(presidentialCandidates[party] + " is the presidential candidate of" + " " + party);

}
  