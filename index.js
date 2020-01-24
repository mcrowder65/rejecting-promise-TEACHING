const utilities = require("./utilities")

function getNames(breeds) {
  return breeds.map(breed => breed.name)
}

function getBreed(breed) {
  return function(names) {
    const name = names.find(name => name === breed)
    if (name) {
      return name
    } else {
      throw new Error(`${breed} not found`)
    }
  }
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

getDog("Corgi")
  .then(dog => {
    return getCat("Russian Blue").then(cat => {
      return getHamsters("Winter").then(
        hamster => {
          return utilities.getBestPet(dog, cat, hamster)
        },
        error => {
          console.error(error)
        }
      )
    })
  })
  .then(console.log)
