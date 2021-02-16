class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "ENG", "Hello world!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "SPA", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "ARA", "Marhabaan bialealam!", ["red", "black", "green"]);
let germany = new Country("Germany", "DEU", "Hallo Welt!", ["black", "red", "yellow"]);
let france = new Country("France", "FRA", "Hola mundo!", ["red", "white", "blue"]);

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Germany") {
        country = germany;
    }
    else if(input === "France") {
        country = france;
    }

    DisplayColors(country.colors);
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;

}

function DisplayColors(colors) {
document.getElementById("Color1").style.backgroundColor = colors[0];
document.getElementById("Color2").style.backgroundColor = colors[1];
document.getElementById("Color3").style.backgroundColor = colors[2];
}
