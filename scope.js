//const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

//for (let x = 1; x < cookies.length; x++) {
//  const currentCookie = cookies[x]
//console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
//}//

//const conjunction = function (firstWord, secondWord) {
//  const conjoinedWord = `${firstWord} ${secondWord}`
//console.log(conjoinedWord)
//}

//conjunction("Master", "Card")



{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    };

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`;
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation;
}

const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    }
}
    console.log(`There were ${locations.length} locations displayed`)

   
    const llamaNamer = function () {
        const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
        const randomizer = Math.floor(Math.random() * 7)
    
        const namer = function () {
            const suffix = " the Llama"
            const name = possibleNames[randomizer]
              return name + suffix
        }
    
        return namer();
    }
    
    nameMaker = llamaNamer()
    console.log(nameMaker)
   
  
    
     