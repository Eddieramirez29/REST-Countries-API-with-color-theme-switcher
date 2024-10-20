const button = document.getElementById("mode");
const input = document.getElementById('input');
const containerSearch = document.querySelector('.containerSearch');
const containerMenu = document.querySelector('.containerMenu');
const continentSelected = document.getElementById('continents');
let continent = continentSelected.value;
const containerCard = document.querySelector(".containerCard");
const div = document.createElement("div");
div.classList.add('card');




let countries;
let allCountries = [];
let regionsArray = [];
let region;
let populationArray = [];
let population;
let flagsArray = [];
let flag;
let counter = 0;

let myCountry;
let myCapital;
let myPopulation;
let myFlag;
let myRegion;




//Get body
const body = document.body;
const header = document.querySelector('header');
let selectColor = 0;
let backgroundColorVariableDark = "hsl(209, 23%, 22%)";
let backgroundColorVariableDarker = "hsl(207, 26%, 17%)";

let colorLight = "white";
let colorDark = "black";

let counterFlags = 0;

button.addEventListener("click", function()
{
    switch(selectColor)
    {
        case 0:
            //Change background colors
            body.style.backgroundColor = backgroundColorVariableDarker;
            button.style.backgroundColor = backgroundColorVariableDarker;
            input.style.backgroundColor = backgroundColorVariableDark;
            containerSearch.style.backgroundColor = backgroundColorVariableDark;
            header.style.backgroundColor = backgroundColorVariableDark;
            containerMenu.style.backgroundColor = backgroundColorVariableDark;
            div.style.backgroundColor = backgroundColorVariableDark;
            continentSelected.style.backgroundColor = backgroundColorVariableDark;
            //Change letter colors
            body.style.color = colorLight;
            button.style.color = colorLight;
            input.style.color = colorLight;
            containerSearch.style.color = colorLight;
            header.style.color = colorLight;
            containerMenu.style.color = colorLight;
            div.style.color = colorLight;
            continentSelected.style.color = colorLight;


            backgroundColorVariableDarker = "white";
            backgroundColorVariableDark = "white";
            selectColor = 1;
        break;
        case 1:
            body.style.backgroundColor = backgroundColorVariableDarker;
            button.style.backgroundColor = backgroundColorVariableDarker;
            input.style.backgroundColor = backgroundColorVariableDark;
            containerSearch.style.backgroundColor = backgroundColorVariableDark;
            header.style.backgroundColor = backgroundColorVariableDark;
            containerMenu.style.backgroundColor = backgroundColorVariableDark;
            div.style.backgroundColor = backgroundColorVariableDark;
            continentSelected.style.backgroundColor = backgroundColorVariableDark;

            body.style.color = colorDark;
            button.style.color = colorDark;
            input.style.color = colorDark;
            containerSearch.style.color = colorDark;
            header.style.color = colorDark;
            containerMenu.style.color = colorDark;
            div.style.color = colorDark;
            continentSelected.style.color = colorDark;

            backgroundColorVariableDarker = "hsl(207, 26%, 17%";
            backgroundColorVariableDark = "hsl(209, 23%, 22%)";
            selectColor = 0;
        break;
    }
    
});

async function extractFlags()
{       counter = 0;
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data[15]);
        //console.log(data[0]);
        // // region = data[0].region;
        // population = data[0].population;
        // console.log(population);
        //This creates a new array called countries
        countries = data.filter(country => country.region === continent);

        countries.forEach(country => {
            allCountries.push(country.name.common);
            regionsArray[counter] = (country.region);
            populationArray[counter] = (country.population);
            flagsArray[counter] = (country.flags.svg);
            //console.log(`Added: ${allCountries[counter]}, ${regionsArray[counter]}, ${populationArray[counter]}`);
            counter++;
        });counter = 0;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

continentSelected.addEventListener("change", function()
{
    containerCard.replaceChildren();

    regionsArray = [];
    populationArray = [];
    flagsArray = [];
    allCountries = [];
    continent = continentSelected.value;

    extractFlags().then(() => { // Waits til extractFlags is complete
        allCountries.forEach(country =>
        {
        region = regionsArray[counter];
        population = populationArray[counter];
        flagsArray[counter];
        const img = document.createElement('img');
        const div2 = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');

        // Asigna un id/class al nuevo elemento
        const div = document.createElement("div");
        div.classList.add('card');
        
        img.id = "flag";
        div2.id = 'text';
        p1.id = "nameCountry";
        p2.id = "population";
        p3.id = "region";
        p4.id = "capital";

        //Styles
        div.style.marginTop = "25px";  
        div.style.marginBottom = "25px";
        div.style.borderRadius = "10px";

        //Add content
        img.src = flagsArray[counter];
        p2.textContent = 'Population: ' + population;
        p3.textContent = 'Region: ' + region;
        counter++;
        p4.textContent = 'Capital: ' + country;
        

        //Append children
        containerCard.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(p1);
        div2.appendChild(p2);
        div2.appendChild(p3);
        div2.appendChild(p4);
    }); 
});

})




async function extractCountry()
{
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${input.value}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            data.forEach(country =>
            {
                if (country.name.common === input.value)
                {
                    myCountry = country.name.common;
                    myCapital = country.capital[0];
                    myPopulation = country.population;
                    myFlag = country.flags.svg;
                    myRegion = country.region;
                }

            });

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
    }
}

function createASingleFlag()
{
        const img = document.createElement('img');
        const div2 = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');

        // Asigna un id/class al nuevo elemento
        const div = document.createElement("div");
        div.classList.add('card');
        
        img.id = "flag";
        div2.id = 'text';
        p1.id = "nameCountry";
        p2.id = "population";
        p3.id = "region";
        p4.id = "capital";

        //Styles
        div.style.marginTop = "25px";  
        div.style.marginBottom = "25px";
        div.style.borderRadius = "10px";

        //Add content
        img.src = myFlag;
        p2.textContent = 'Population: ' + myPopulation;
        p3.textContent = 'Region: ' + myRegion;
        p4.textContent = 'Capital: ' + myCapital;
        

        //Append children
        containerCard.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(p1);
        div2.appendChild(p2);
        div2.appendChild(p3);
        div2.appendChild(p4);
}

//Create new card that contains country information and flag
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter")
    {
        containerCard.replaceChildren();
        extractCountry().then(() =>
        {
            createASingleFlag();
        })// Waits til extractFlags is complete
        input.placeholder[0] = "Search for a country..."
    }
}); // Cerrado correctamente el addEventListener