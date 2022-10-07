class pet {
    constructor(name) {
        this.name = name
        this.species = "Dog"
        this.breed = "Shi Tzu"
        this.weight = 220
        this["Eye Color"] = "Green"
    }
}

const petArray = []

for (let i = 0; i < 10; i++) {
    petArray.push(new pet(`Pet ${i + 1}`))
}

const Pets = () => {
    return petArray.map(petObj => {
        return `<div class="pet">
            <h3>${petObj.name}</h3>
            <ul>
                <li>Species: ${petObj.species}</li>
                <li>Breed: ${petObj.breed}</li>
                <li>Weight: ${petObj.weight}</li>
                <li>Eye Color: ${petObj["Eye Color"]}</li>
            </ul>
        </div>`
    }).join("")
}



const renderHTML = () => {
    document.querySelector("#container").innerHTML = Pets()
}

renderHTML()