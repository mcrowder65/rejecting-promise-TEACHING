function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
const cats = [
  {
    id: "59a1c646",
    name: "Bengal"
  },
  {
    id: "23559fba",
    name: "Himalayan"
  },
  {
    id: "3237c6a6",
    name: "Persian"
  },
  {
    id: "07577aa7",
    name: "Russian Blue"
  },
  {
    id: "ff1dac77",
    name: "Siamese"
  }
]
const dogs = [
  {
    id: "2f349b0c",
    name: "Golden Retriever"
  },
  {
    id: "ea382216",
    name: "Corgi"
  },
  {
    id: "6f0e0d6e",
    name: "Yellow Lab"
  },
  {
    id: "e6450423",
    name: "Pit Bull"
  },
  {
    id: "2641706a",
    name: "German Shepherd"
  }
]

const hamsters = [
  {
    id: "4a4355a2-3068-444c-a02a-199e4c8e226f",
    name: "Syrian"
  },
  {
    id: "521ccd1a-6a7c-4e7a-99b5-8f8ec20eaf3b",
    name: "Roborovski Dwarf"
  },
  {
    id: "5f51fb31-fdcb-4de2-a7e4-4017e0f003a9",
    name: "Chinese"
  },
  {
    id: "2b48b7dc-633e-42eb-a89d-8a6525abef06",
    name: "Winter White"
  },
  {
    id: "46966294-5f98-4418-8d79-0cc22a1b7684",
    name: "Campbell's Dwarf"
  }
]
function getCatBreeds() {
  return sleep(0).then(() => {
    return cats
  })
}
function getDogBreeds() {
  return sleep(0).then(() => {
    return dogs
  })
}

function getHamsters() {
  return sleep(0).then(() => {
    return hamsters
  })
}
function getBestPet(dog, cat, hamster) {
  return sleep(0).then(() => {
    if (dog === "Not Found" || !dog || !dogs.find(d => d.name === dog)) {
      return "Dog not found"
    } else if (cat === "Not Found" || !cat || !cats.find(c => c.name === cat)) {
      return "Cat not found"
    } else if (
      hamster === "Not Found" ||
      !hamster ||
      !hamsters.find(h => h.name === hamster)
    ) {
      return "Hamster not found"
    } else if (dog === "Golden Retriever" || (!dog && !cat)) {
      return "Golden Retriever"
    } else if (hamster === "Winter White" || hamster === "Roborovski Dwarf") {
      return hamster
    } else {
      return cat
    }
  })
}

module.exports = {
  getDogBreeds,
  getCatBreeds,
  getBestPet,
  getHamsters
}
