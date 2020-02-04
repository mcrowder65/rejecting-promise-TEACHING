const utilities = require("./utilities")

function getNames(breeds) {
  return breeds.map(breed => breed.name)
}

function getDog(breed) {
  return utilities
    .getDogBreeds()
    .then(getNames)
    .then(getBreed(breed))
}

function getCat(breed) {
  return utilities
    .getCatBreeds()
    .then(getNames)
    .then(getBreed(breed))
}

function getHamsters(breed) {
  return utilities
    .getHamsters()
    .then(getNames)
    .then(getBreed(breed))
}

function getBreed(breed) {
  return function(names) {
    return names.find(name => name === breed) || "Not Found"
  }
}

getDog("Corgi")
  .then(dog => {
    return getCat("Russian Blue").then(cat => {
      return getHamsters("Winter ").then(hamster => {
        return utilities.getBestPet(dog, cat, hamster)
      })
    })
  })
  .then(console.log)
